import Link from "next/link";
import Reveal from "@/components/animation/Reveal";
import HeroAscii from "@/components/sections/HeroAscii";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects, projects } from "@/content/projects";
import styles from "./page.module.css";

// From the resume's skills section and the tech actually used in the projects.
const CAPABILITIES: Array<{ area: string; items: string }> = [
  { area: "Frontend", items: "React · Angular · JavaScript · Vite · Tailwind CSS · React Router" },
  { area: "Mobile", items: "Flutter · Dart · Bloc / Cubit · Provider · Android (Java) · Android Studio" },
  { area: "Backend & APIs", items: "Node.js · Express.js · REST APIs · JWT · Google OAuth" },
  { area: "Databases", items: "MongoDB · Mongoose · MySQL · SQL & NoSQL schema design" },
  { area: "Integrations", items: "Traccar GPS · Leaflet · Google Maps · Razorpay · Firebase Cloud Messaging · OpenAI API · Google ML Kit" },
  { area: "Languages & tools", items: "Java · C · Python · PHP · Solidity · Git · GitHub · Nginx" },
];

export default function Home() {
  return (
    <>
      <HeroAscii />

      <section className="section" aria-labelledby="selected-heading">
        <div className="container">
          <p className="label">Selected work</p>
          <h2 id="selected-heading" className={styles.sectionTitle}>
            Proof, not <em>promises.</em>
          </h2>
          <ul className={styles.selected}>
            {featuredProjects.map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={Math.min(i * 0.06, 0.18)}>
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
          <p className={styles.more}>
            <Link className="btn" href="/projects">
              All {projects.length} case studies
            </Link>
          </p>
        </div>
      </section>

      <section
        className={`section theme-dark ${styles.capSection}`}
        aria-labelledby="capabilities-heading"
      >
        <div className="container">
          <p className="label label--on-dark">Capabilities</p>
          <h2 id="capabilities-heading" className={styles.sectionTitle}>
            What I work <em>with.</em>
          </h2>
          <ul className={styles.capGrid}>
            {CAPABILITIES.map((cap, i) => (
              <li key={cap.area} className={`module module--hover ${styles.cap}`}>
                <h3>
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  {cap.area}
                </h3>
                <p className={styles.chips}>
                  {cap.items.split(" · ").map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.more}>
            <Link className="btn" href="/about">
              How I work
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="what-i-do-heading">
        <div className="container">
          <p className="label">What I do</p>
          <h2 id="what-i-do-heading" className={styles.sectionTitle}>
            Where I spend my <em>days.</em>
          </h2>
          <p className={styles.sectionIntro}>
            By day I&apos;m a Software Engineer, building and
            maintaining web applications with React and Node.js and designing
            the databases behind them. Alongside that I take on
            freelance builds and personal projects — from Flutter mobile apps
            to a fleet-tracking platform wired to real GPS hardware.
          </p>
          <ul className={styles.offer}>
            <li className="module module--hover">
              <h3>Web applications</h3>
              <p>
                Scalable web apps with React and Node.js — developed, tested
                and maintained for performance, security and reliability, with
                SQL and NoSQL schemas and queries designed for the data behind
                them.
              </p>
            </li>
            <li className="module module--hover">
              <h3>Mobile apps</h3>
              <p>
                Flutter apps for Android and iOS: Padhaku, a learning app for
                school students in Gujarat that is live on Google Play, and
                PaisaSplit, an expense-sharing app with on-device receipt
                scanning and UPI settle-up.
              </p>
            </li>
            <li className="module module--hover">
              <h3>Tracking &amp; operations platforms</h3>
              <p>
                TrackOwl connects Teltonika GPS trackers, through a self-hosted
                Traccar server, to a React and Node.js platform for live fleet
                maps, trips, fuel, maintenance and billing, with support for
                several client companies on one system.
              </p>
            </li>
            <li className="module module--hover">
              <h3>MERN-stack &amp; Web3 builds</h3>
              <p>
                MERN-stack projects end to end: NFT Bazaar, a decentralized NFT
                marketplace with Solidity; Travel Buddy, an Android booking app
                with an OpenAI chatbot; and Campus360, a student life cycle
                platform with real-time alumni chat.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-heading">
        <div className="container">
          <p className="label">Approach</p>
          <h2 id="approach-heading" className={styles.sectionTitle}>
            How the work gets <em>done.</em>
          </h2>
          <p className={styles.sectionIntro}>
            I like work that turns an idea into something people actually use
            — in a browser, on a phone, or wired to a tracker in a truck.
          </p>
          <ul className={styles.principles}>
            <li>
              <h3>Bring ideas to life</h3>
              <p>
                From a learning app on Google Play to live GPS tracking, I take
                projects from an idea to a working product.
              </p>
            </li>
            <li>
              <h3>Work as a team</h3>
              <p>
                Strong teamwork is part of how I build — with my team day to
                day and with clients on freelance projects.
              </p>
            </li>
            <li>
              <h3>Keep exploring</h3>
              <p>
                I actively explore new technologies to keep up with the
                industry — Flutter, Solidity, the OpenAI API and GPS hardware
                all show up in my projects, and I hold Microsoft&apos;s AI-900
                certification.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="about-teaser-heading">
        <div className="container">
          <div className={`module ticks ${styles.teaser}`}>
            <div>
              <p className="label">Briefly, about me</p>
              <h2 id="about-teaser-heading" className={styles.sectionTitle}>
                Hi, I&apos;m <em>Dev.</em>
              </h2>
              <p className={styles.teaserText}>
                I build web apps with React and Node.js and mobile apps with
                Flutter, and take products from brief to deployment. The
                problem first, technology in service of it.
                Most projects start the same way: a short conversation about
                what you want to build, then a scoped first step.
              </p>
            </div>
            <div className={styles.teaserCtas}>
              <Link className="btn btn--ink" href="/about">
                More about my background
              </Link>
              <Link className="btn" href="/resume">
                Read my full resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
