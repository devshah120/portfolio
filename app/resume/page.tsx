import type { Metadata } from "next";
import Link from "next/link";
import { canonical, site } from "@/lib/site";
import styles from "./resume.module.css";

const resumeCanonical = canonical("/resume");

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — Software Engineer, ${site.city}. React and Node.js experience, MERN projects, skills, MCA.`,
  keywords: [
    `${site.name} resume`,
    "software engineer Ahmedabad",
    "MERN stack developer India",
    "React Node.js developer",
  ],
  ...(resumeCanonical
    ? {
        alternates: { canonical: resumeCanonical },
        openGraph: { url: resumeCanonical },
      }
    : {}),
};

// Content source of truth: public/dev-shah-resume.pdf — keep the two in sync.
const RESUME_PDF = "/dev-shah-resume.pdf";

const EXPERIENCE: Array<{ role: string; org: string; period: string; points: string[] }> = [
  {
    role: "Software Engineer",
    org: "Lemtoj Infotech",
    period: "Jan 2025 – Present",
    points: [
      "Developed, tested, and maintained scalable web applications using React and Node.js, ensuring high performance, security, and reliability.",
      "Designed and optimized database schemas and queries with SQL and NoSQL, enhancing efficiency, scalability, and data integrity.",
    ],
  },
];

const PROJECTS: Array<{ name: string; tech: string; points: string[] }> = [
  {
    name: "NFT Bazaar",
    tech: "React, Express.js, Node.js, MongoDB, Tailwind CSS, Pinata IPFS",
    points: [
      "Developed an NFT marketplace on the MERN stack for buying, selling, and auctioning NFTs.",
      "Integrated Solidity to connect to the blockchain, enabling secure and decentralized transactions within the marketplace.",
    ],
  },
  {
    name: "Travel Buddy",
    tech: "Java, Express.js, Node.js, MongoDB, OpenAI API",
    points: [
      "Developed an Android application for booking hotel accommodations, train tickets, flights, and bus tickets in one place for travel planning and management.",
      "Integrated the OpenAI API to handle travel-related queries.",
    ],
  },
  {
    name: "Campus360 — Student Life Cycle Management System",
    tech: "React, Express.js, Node.js, MongoDB",
    points: [
      "Developed an application where students manage and access attendance records, academic marks, eBook resources, and fee payments within a unified platform.",
      "Built real-time chat between students and alumni to support mentorship and knowledge sharing.",
    ],
  },
];

const SKILLS: Array<{ group: string; items: string }> = [
  { group: "Programming languages", items: "Java, C, Python, JavaScript, PHP" },
  { group: "Development / frameworks", items: "React, Angular, Express.js, Node.js" },
  { group: "Databases", items: "MongoDB, MySQL" },
  { group: "Tools", items: "Android Studio, Git, GitHub" },
];

const EDUCATION: Array<{ degree: string; school: string; period: string; grade: string }> = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "GLS University",
    period: "2023 – 2025",
    grade: "CGPA 8.3",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "GLS University",
    period: "2020 – 2023",
    grade: "CGPA 8.44",
  },
];

const ACHIEVEMENTS = [
  "Regional Round Winner and Final Round Participant in SSIP 2022.",
  "Microsoft AI-900 (Azure AI Fundamentals) certification — foundational AI concepts and Microsoft Azure AI services.",
];

export default function ResumePage() {
  return (
    <div className="section grid-bg" aria-labelledby="resume-heading">
      <div className="container">
        <p className="label">Curriculum vitae</p>

        <header className={styles.header}>
          <h1 id="resume-heading">{site.name}</h1>
          <p className={styles.role}>Software Engineer</p>
          <address className={styles.contact}>
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> ·{" "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </address>
          <p className={styles.download}>
            <a className="btn btn--ink" href={RESUME_PDF} download>
              Download PDF
            </a>
          </p>
        </header>

        <section aria-labelledby="resume-summary" className={styles.block}>
          <h2 id="resume-summary">Summary</h2>
          <p>
            An aspiring software developer with strong teamwork skills and a
            passion for coding, adept at bringing ideas to life. Proactively
            explores new technologies to stay up to date with industry
            advancements.
          </p>
        </section>

        <section aria-labelledby="resume-exp" className={styles.block}>
          <h2 id="resume-exp">Work experience</h2>
          {EXPERIENCE.map((job) => (
            <article key={`${job.org}-${job.role}`} className={styles.job}>
              <h3>
                {job.role} — {job.org}
              </h3>
              <p className={styles.jobFocus}>{job.period}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-projects" className={styles.block}>
          <h2 id="resume-projects">Projects</h2>
          {PROJECTS.map((project) => (
            <article key={project.name} className={styles.job}>
              <h3>{project.name}</h3>
              <p className={styles.jobFocus}>{project.tech}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-skills" className={styles.block}>
          <h2 id="resume-skills">Technical skills</h2>
          <dl className={styles.skills}>
            {SKILLS.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="resume-edu" className={styles.block}>
          <h2 id="resume-edu">Education</h2>
          <ul className={styles.edu}>
            {EDUCATION.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong> — {e.school} · {e.period} · {e.grade}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resume-achievements" className={styles.block}>
          <h2 id="resume-achievements">Achievements</h2>
          <div className={styles.job}>
            <ul>
              {ACHIEVEMENTS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className={styles.footer}>
          <a
            className="btn btn--signal"
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call
          </a>
          <Link className="btn" href="/about">
            Start a project
          </Link>
        </footer>
      </div>
    </div>
  );
}
