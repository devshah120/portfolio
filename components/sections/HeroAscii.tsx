import Link from "next/link";
import CodeCard from "@/components/graphics/CodeCard";
import LocalClock from "@/components/layout/LocalClock";
import { site } from "@/lib/site";
import styles from "./HeroAscii.module.css";

export default function HeroAscii() {
  return (
    <section className={`section grid-bg ${styles.section}`} aria-labelledby="intro-heading">
      <div className={`container ${styles.hero}`}>
        <div className={`${styles.status} fade-up`}>
          <span className={styles.statusItem}>
            <span className="pulse" aria-hidden="true" />
            Open to new projects
          </span>
          <span className={styles.statusItem}>{site.location}</span>
          <LocalClock className={`${styles.statusItem} ${styles.hideSm}`} />
        </div>

        <div className={styles.head}>
          <p className={`${styles.kicker} fade-up`}>
            {site.role} — {site.location}
          </p>
          <h1 id="intro-heading" className={styles.name}>
            <span className="line-up" style={{ "--d": "120ms" } as React.CSSProperties}>
              <span>
                {site.name}
                <span className={styles.dot} aria-hidden="true">.</span>
              </span>
            </span>
            <span className="visually-hidden">
              {" "}
              — {site.role}, {site.location}
            </span>
          </h1>
        </div>

        <div className={`${styles.portrait} fade-up`} style={{ "--d": "200ms" } as React.CSSProperties}>
          <CodeCard />
        </div>

        <div className={`${styles.body} fade-up`} style={{ "--d": "340ms" } as React.CSSProperties}>
          <p className={styles.lead}>
            I&apos;m {site.name} — a software engineer based in{" "}
            {site.location}. I build web applications with React and Node.js,
            design the databases behind them, and ship cross-platform mobile
            apps with Flutter.
          </p>
          <div className={styles.ctas}>
            <Link className="btn btn--ink" href="/projects">
              View projects
            </Link>
            <a
              className="btn btn--signal"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a meeting
            </a>
            <Link className="btn" href="/about">
              Start a project
            </Link>
          </div>
          <ul className={styles.facts} aria-label="Key facts">
            <li className="chip">
              <span>Base</span>
              <strong>{site.location}</strong>
            </li>
            <li className="chip">
              <span>Focus</span>
              <strong>React · Node.js · Flutter · MongoDB</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
