import Link from "next/link";
import type { Project } from "@/content/projects";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`module ticks ${styles.card}`}
      data-tone={project.accent.tone}
      data-motif={project.accent.motif}
    >
      <span className={styles.head}>
        <span className={styles.no} aria-hidden="true">
          {project.no} /
        </span>
        <span className={styles.kind}>{project.kindLabel}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </span>
      <span className={styles.body}>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.tagline}>{project.tagline}</span>
      </span>
      <span className={styles.meta}>
        <span className={styles.type}>{project.type}</span>
        <span className={styles.stack}>
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}
