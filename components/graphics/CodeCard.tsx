"use client";

import { useEffect, useMemo, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/site";
import styles from "./CodeCard.module.css";

type Kind = "kw" | "str" | "prop" | "fn" | "com" | "bool" | "punc" | "plain";
type Token = { text: string; kind: Kind };

const FILE = `${site.name.toLowerCase().replace(/\s+/g, "-")}.ts`;

const CODE = `// ${FILE}
const developer = {
  name: "${site.name}",
  role: "${site.role}",
  based: "${site.location}",
  timezone: "${site.timezone.split(" ")[0]}",
  stack: [${site.stack.map((s) => `"${s}"`).join(", ")}],
  openToWork: true,
};

export function build(idea: string) {
  return ship(design(idea));
}`;

const OUTPUT = ["$ npm run dev", "✓ ready — open to new projects"];

const KEYWORDS = new Set(["const", "export", "function", "return", "string"]);

// Tiny purpose-built highlighter for the snippet above.
function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const re = /(\/\/[^\n]*)|("[^"]*")|(\b(?:true|false)\b)|([A-Za-z_$][\w$]*)|(\s+)|([^\sA-Za-z_$"])/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    const [text, com, str, bool, ident, space] = m;
    if (com) tokens.push({ text, kind: "com" });
    else if (str) tokens.push({ text, kind: "str" });
    else if (bool) tokens.push({ text, kind: "bool" });
    else if (ident) {
      const rest = code.slice(re.lastIndex);
      const kind: Kind = KEYWORDS.has(ident)
        ? "kw"
        : /^\s*\(/.test(rest)
          ? "fn"
          : /^\s*:/.test(rest)
            ? "prop"
            : "plain";
      tokens.push({ text, kind });
    } else if (space) tokens.push({ text, kind: "plain" });
    else tokens.push({ text, kind: "punc" });
  }
  return tokens;
}

const TOKENS = tokenize(CODE);
const TOTAL = CODE.length;
const LINE_COUNT = CODE.split("\n").length;

function cursorPosition(n: number) {
  const typed = CODE.slice(0, n).split("\n");
  return { ln: typed.length, col: typed[typed.length - 1].length + 1 };
}

export default function CodeCard() {
  // Starts empty (untyped text is invisible but keeps its space, so no layout shift).
  const [typed, setTyped] = useState(0);
  const [run, setRun] = useState(0);
  const done = typed >= TOTAL;

  useEffect(() => {
    let timer = 0;
    if (prefersReducedMotion()) {
      timer = window.setTimeout(() => setTyped(TOTAL), 0);
      return () => window.clearTimeout(timer);
    }
    let n = 0;
    const step = () => {
      // Type whitespace runs in one go so indentation doesn't feel sluggish.
      n += 1;
      while (n < TOTAL && CODE[n] === " " && CODE[n - 1] === " ") n += 1;
      setTyped(n);
      if (n < TOTAL) timer = window.setTimeout(step, CODE[n - 1] === "\n" ? 140 : 26);
    };
    timer = window.setTimeout(() => {
      setTyped(0);
      step();
    }, 450);
    return () => window.clearTimeout(timer);
  }, [run]);

  const rendered = useMemo(() => {
    const out: React.ReactNode[] = [];
    let pos = 0;
    TOKENS.forEach((tok, i) => {
      const start = pos;
      pos += tok.text.length;
      const cls = styles[tok.kind];
      if (pos <= typed) {
        out.push(
          <span key={i} className={cls}>
            {tok.text}
          </span>,
        );
      } else if (start < typed) {
        const cut = typed - start;
        out.push(
          <span key={i} className={cls}>
            {tok.text.slice(0, cut)}
            <span className={styles.cursor} aria-hidden="true" />
            <span className={styles.ghost}>{tok.text.slice(cut)}</span>
          </span>,
        );
      } else {
        if (start === typed) out.push(<span key="cursor" className={styles.cursor} aria-hidden="true" />);
        out.push(
          <span key={i} className={`${cls} ${styles.ghost}`}>
            {tok.text}
          </span>,
        );
      }
    });
    if (typed >= TOTAL) out.push(<span key="cursor" className={styles.cursor} aria-hidden="true" />);
    return out;
  }, [typed]);

  const { ln, col } = cursorPosition(typed);

  return (
    <figure className={`module ticks ${styles.card}`}>
      <div className={styles.titlebar}>
        <span className={styles.lights} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.tab}>{FILE}</span>
        <button
          type="button"
          className={styles.replay}
          onClick={() => setRun((r) => r + 1)}
          disabled={!done}
        >
          ↻ Replay
        </button>
      </div>

      <div className={styles.editor} aria-hidden="true">
        <ol className={styles.gutter}>
          {Array.from({ length: LINE_COUNT }, (_, i) => (
            <li key={i} className={i + 1 === ln ? styles.activeLine : undefined}>
              {i + 1}
            </li>
          ))}
        </ol>
        <pre className={styles.code}>
          <code>{rendered}</code>
        </pre>
      </div>

      <div className={styles.terminal} aria-hidden="true">
        {OUTPUT.map((line, i) => (
          <p key={line} className={done ? styles.outShow : styles.outHide} style={{ transitionDelay: `${i * 260}ms` }}>
            {i === 0 ? <span className={styles.prompt}>{line}</span> : <span className={styles.ok}>{line}</span>}
          </p>
        ))}
      </div>

      <figcaption className={styles.statusbar}>
        <span>
          TypeScript · UTF-8 · Ln {ln}, Col {col}
        </span>
        <span>{site.name}</span>
      </figcaption>

      <span className="visually-hidden">
        {`Code snippet describing ${site.name}: ${site.role} based in ${site.location}, working with ${site.stack.join(", ")}, open to new projects.`}
      </span>
    </figure>
  );
}
