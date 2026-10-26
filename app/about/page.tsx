import type { Metadata } from "next";
import Link from "next/link";
import BookingCTA from "@/components/contact/BookingCTA";
import LeadForm from "@/components/contact/LeadForm";
import { profile } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";
import { canonical, site } from "@/lib/site";
import styles from "./about.module.css";

const aboutCanonical = canonical("/about");

export const metadata: Metadata = {
  title: "About",
  description:
    `About ${site.name} — ${site.role} in ${site.city}. React, Node.js, Flutter and MongoDB. Book a meeting.`,
  keywords: [
    `about ${site.name}`,
    `software engineer ${site.city}`,
    "hire React developer India",
    `Flutter developer ${site.city}`,
    "book a meeting Cal.com",
  ],
  ...(aboutCanonical
    ? {
        alternates: { canonical: aboutCanonical },
        openGraph: { url: aboutCanonical },
      }
    : {}),
};

const PRINCIPLES = [
  {
    title: "Bring ideas to life",
    text: "I like turning an idea into a working product. Padhaku went from brief to a learning app on Google Play; TrackOwl went from GPS hardware to a live fleet map.",
  },
  {
    title: "Work as a team",
    text: "Strong teamwork is part of how I build — with my team day to day, and with clients on freelance projects.",
  },
  {
    title: "Keep exploring",
    text: "I actively explore new technologies to keep up with industry advancements. Flutter, Solidity, the OpenAI API and GPS tracking hardware all show up in my projects.",
  },
  {
    title: "Ship real products",
    text: "My freelance work runs in the real world: Padhaku is live on Google Play, and TrackOwl runs on a Linux server behind Nginx with HTTPS, with support for several client companies on one system.",
  },
];

// Areas covered by Dev Shah's own projects (see content/projects.ts).
const AREAS = [
  "Cross-platform mobile apps with Flutter",
  "Live GPS tracking and fleet operations",
  "MERN-stack web applications",
  "AI integration — the OpenAI API and on-device ML Kit OCR",
  "Blockchain and Web3 — Solidity and IPFS",
  "Database design with SQL and NoSQL",
];

export default function AboutPage() {
  return (
    <>
      <section className="section grid-bg" aria-labelledby="about-heading">
        <div className="container">
          <p className="label">Profile</p>
          <h1 id="about-heading" className={styles.heading}>
            About
          </h1>
          <p className={styles.lead}>
            I&apos;m {site.name}, a {site.role} based in {site.location}. I
            build and maintain web applications with React and Node.js, design
            the SQL and NoSQL databases behind them, and build cross-platform
            mobile apps with Flutter.
          </p>

          <h2 className={styles.h2}>How I work</h2>
          <ul className={styles.principles}>
            {PRINCIPLES.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>

          <h2 className={styles.h2}>Areas I&apos;ve built in</h2>
          <ul className={styles.interests}>
            {AREAS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h2 className={styles.h2}>Elsewhere</h2>
          <ul className={styles.links}>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>

          <h2 className={styles.h2}>Questions, answered</h2>
          <dl className={styles.faq}>
            <div>
              <dt>Who is {site.name}?</dt>
              <dd>{profile.whoIs}</dd>
            </div>
            <div>
              <dt>What do you specialize in?</dt>
              <dd>{profile.specialties}</dd>
            </div>
            <div>
              <dt>How do I start a project or book a meeting?</dt>
              <dd>
                Send a short brief through the form below. Prefer talking?{" "}
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a slot
                </a>
                , no form needed.
              </dd>
            </div>
            <div>
              <dt>What work is in the portfolio?</dt>
              <dd>
                {projects.length} case studies. Selected work:{" "}
                {featuredProjects.map((p) => p.title).join(", ")}. Each case
                study states the project type, role and stack. See{" "}
                <Link href="/projects">all case studies</Link>.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className={`theme-dark ${styles.contact}`}>
            <div>
              <p className="label label--on-dark">Start a project</p>
              <h2 id="contact-heading">Tell me about it.</h2>
              <p>
                Send a short brief about what you want to build. Prefer
                talking? Book a slot, no form needed.
              </p>
              <p className={styles.contactCtas}>
                <BookingCTA label="Schedule a call" />
              </p>
              <p className={styles.mailto}>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className={styles.formWrap}>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
