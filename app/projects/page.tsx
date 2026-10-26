import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/animation/Reveal";
import { featuredProjects, projects, type Project } from "@/content/projects";
import { canonical, site } from "@/lib/site";
import styles from "./projects.module.css";

const projectsCanonical = canonical("/projects");

export const metadata: Metadata = {
  title: "Projects",
  description:
    `${projects.length} case studies by ${site.name}, ${site.city} — including ${featuredProjects.map((p) => p.title).join(", ")}.`,
  keywords: [
    `${site.name} projects`,
    "Flutter app developer India",
    "MERN stack projects",
    "React Node.js portfolio",
    "NFT marketplace developer",
    "fleet management GPS tracking developer",
  ],
  ...(projectsCanonical
    ? {
        alternates: { canonical: projectsCanonical },
        openGraph: { url: projectsCanonical },
      }
    : {}),
};

function CardItem({ project, index }: { project: Project; index: number }) {
  return (
    <li>
      <Reveal delay={Math.min(index * 0.05, 0.2)}>
        <ProjectCard project={project} />
      </Reveal>
    </li>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="section grid-bg" aria-labelledby="projects-heading">
        <div className="container">
          <p className="label">Index — {String(projects.length).padStart(2, "0")} case studies</p>
          <h1 id="projects-heading" className={styles.heading}>
            Work
          </h1>
          <p className={styles.intro}>
            Mobile apps, a fleet-tracking platform, MERN-stack web apps and a
            Web3 marketplace — from a learning app for school students and live
            GPS truck tracking to an expense-sharing app and an NFT marketplace.
            Each case study lists the project type and the stack.
          </p>
          <ul className={styles.list}>
            {projects.map((project, i) => (
              <CardItem key={project.slug} project={project} index={i} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="projects-cta-heading">
        <div className="container">
          <div className={`module ticks ${styles.cta}`}>
            <h2 id="projects-cta-heading">Something to <em>build?</em></h2>
            <p>
              A mobile app, a web app, new features or a project from zero —
              start with a conversation.
            </p>
            <p className={styles.ctaRow}>
              <a
                className="btn btn--signal"
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a meeting
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
