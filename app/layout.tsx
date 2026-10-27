import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import RouteLoader from "@/components/animation/RouteLoader";
import TabAttention from "@/components/animation/TabAttention";
import Spotlight from "@/components/animation/Spotlight";
import CustomCursor from "@/components/animation/CustomCursor";
import { profile } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";
import { canonical, site, siteUrl } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: "../public/fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: "../public/fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  variable: "--font-sans",
  display: "swap",
});

const label = localFont({
  src: "../public/fonts/BricolageGrotesque-Variable.woff2",
  weight: "200 800",
  variable: "--font-label",
  display: "swap",
});

const homeTitle = `${site.name} — ${site.role} · React, Node.js & Flutter`;
const description =
  `${site.name} — a ${site.role.toLowerCase()} based in ${site.location}. I build web applications with React and Node.js, design the databases behind them, and ship cross-platform mobile apps with Flutter.`;
const homeCanonical = canonical("/");

const keywords = [
  site.name,
  `${site.role} ${site.city}`,
  "Software Engineer India",
  "React developer",
  "Node.js developer",
  "Flutter developer",
  "MERN stack developer",
  "MongoDB developer",
  "GPS fleet tracking developer",
  "Software Engineer Ahmedabad",
];

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: homeTitle,
    template: `%s — ${site.name}`,
  },
  description,
  keywords,
  ...(homeCanonical ? { alternates: { canonical: homeCanonical } } : {}),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${site.name} — Portfolio`,
    title: homeTitle,
    description,
    ...(homeCanonical ? { url: homeCanonical } : {}),
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description,
    images: [
      {
        url: "/opengraph-image",
        alt: `${site.name} — ${site.role} portfolio`,
      },
    ],
  },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: site.name,
        jobTitle: site.role,
        email: `mailto:${site.email}`,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.countryCode,
        },
        sameAs: [site.github, site.linkedin, site.bookingUrl],
      },
      {
        "@type": "ProfessionalService",
        name: `${site.name} — ${site.role}`,
        description:
          profile.summary,
        telephone: site.phone,
        email: site.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.countryCode,
        },
        ...(homeCanonical ? { url: homeCanonical } : {}),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Who is ${site.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: profile.whoIs,
            },
          },
          {
            "@type": "Question",
            name: `What does ${site.name} specialize in?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: profile.specialties,
            },
          },
          {
            "@type": "Question",
            name: "How can I start a project or book a meeting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Send a short brief through the lead form on the About page, or book a slot directly at ${site.bookingUrl} with no form needed.`,
            },
          },
          {
            "@type": "Question",
            name: "What kind of work is shown in the portfolio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `${projects.length} case studies. Selected work: ${featuredProjects.map((p) => `${p.title} (${p.type})`).join(", ")}. Each case study states the project type, role and stack.`,
            },
          },
          {
            "@type": "Question",
            name: `Where is ${site.name} based and how can I get in touch?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Based in ${site.location}. Email ${site.email}, phone ${site.phone}, GitHub ${site.github}, LinkedIn ${site.linkedin}.`,
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        name: `${site.name} — Portfolio`,
        ...(homeCanonical ? { url: homeCanonical } : {}),
        author: { "@type": "Person", name: site.name },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${label.variable}`}
    >
      <body>
        <StructuredData />

        <div id="boot-curtain" aria-hidden="true">
          <span className="boot-foot">
            <span>PORTFOLIO</span>
            <span>LOADING</span>
          </span>
          <span className="boot-word">{site.name}</span>
          <span className="boot-foot">
            <span>SOFTWARE ENGINEER — {site.cityCode}</span>
            <span>■■■</span>
          </span>
        </div>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <RouteLoader />
        <TabAttention />
        <Spotlight />
        <CustomCursor />
      </body>
    </html>
  );
}
