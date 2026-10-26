"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

const INTERACTIVE = "a, button, [role='button'], label, select, summary, [data-cursor='hover']";
const TEXT_ENTRY =
  "input:not([type='checkbox']):not([type='radio']):not([type='submit']):not([type='button']), textarea, [contenteditable='true']";

const pad = (n: number) => String(Math.max(0, Math.round(n))).padStart(4, "0");

// Blueprint crosshair: full-viewport hairlines through the pointer, a coral
// centre mark, and a live X/Y readout. Only runs on devices with a fine
// pointer; the native cursor is hidden via a class on <html> that is added
// once this has mounted, so it never disappears if the script fails.
export default function CustomCursor() {
  const hRef = useRef<HTMLDivElement>(null);
  const vRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const h = hRef.current;
    const v = vRef.current;
    const mark = markRef.current;
    const label = labelRef.current;
    const coords = coordsRef.current;
    if (!h || !v || !mark || !label || !coords) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let raf = 0;

    const render = () => {
      raf = 0;
      h.style.transform = `translate3d(0, ${y}px, 0)`;
      v.style.transform = `translate3d(${x}px, 0, 0)`;
      mark.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      coords.textContent = `X ${pad(x)} · Y ${pad(y)}`;

      // Keep the readout on screen: flip to the other side near the edges.
      const flipX = x + 14 + label.offsetWidth > window.innerWidth - 8;
      const flipY = y + 14 + label.offsetHeight > window.innerHeight - 8;
      const lx = flipX ? x - 14 - label.offsetWidth : x + 14;
      const ly = flipY ? y - 14 - label.offsetHeight : y + 14;
      label.style.transform = `translate3d(${lx}px, ${ly}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      root.dataset.cursor = "on";

      const target = e.target as Element | null;
      root.dataset.cursorState = target?.closest?.(TEXT_ENTRY)
        ? "text"
        : target?.closest?.(INTERACTIVE)
          ? "hover"
          : "default";

      if (!raf) raf = requestAnimationFrame(render);
    };

    const onDown = () => (root.dataset.cursorPressed = "true");
    const onUp = () => delete root.dataset.cursorPressed;
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) root.dataset.cursor = "off";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("mouseout", onLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseout", onLeave);
      root.classList.remove("has-custom-cursor");
      delete root.dataset.cursor;
      delete root.dataset.cursorState;
      delete root.dataset.cursorPressed;
    };
  }, []);

  return (
    <div className={styles.cursor} aria-hidden="true">
      <div ref={hRef} className={`${styles.line} ${styles.h}`} />
      <div ref={vRef} className={`${styles.line} ${styles.v}`} />
      <div ref={markRef} className={styles.mark}>
        <span className={styles.markShape} />
      </div>
      <div ref={labelRef} className={styles.label}>
        <span ref={coordsRef}>X 0000 · Y 0000</span>
        <span className={styles.action}>Click</span>
      </div>
    </div>
  );
}
