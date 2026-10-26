"use client";

import { useEffect } from "react";

// One delegated listener feeds pointer coordinates to the hovered `.module`,
// which paints a soft radial highlight via CSS (`--mx` / `--my`).
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    let raf = 0;
    let last: PointerEvent | null = null;

    const apply = () => {
      raf = 0;
      if (!last) return;
      const target = last.target as Element | null;
      const el = target?.closest?.<HTMLElement>(".module");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${last.clientX - rect.left}px`);
      el.style.setProperty("--my", `${last.clientY - rect.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
