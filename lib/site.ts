export const site = {
  name: "Dev Shah",
  role: "Software Engineer",
  location: "Ahmedabad, India",
  city: "Ahmedabad",
  cityCode: "AMD",
  countryCode: "IN",
  timezone: "UTC+5:30 — IST",
  timeZoneId: "Asia/Kolkata", // IANA zone used by the live clock in the hero
  timeZoneAbbr: "IST",
  tagline: "I build digital systems.",
  // Shown in the hero code-editor card.
  stack: ["React", "Node.js", "Flutter"],
  email: "devshah120902@gmail.com",
  github: "https://github.com/devshah120",
  linkedin: "https://www.linkedin.com/in/itsdevshah",
  phone: "+91 83477 25988",
  bookingUrl: "https://cal.com/dev-shah",
} as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export function canonical(path: string): string | undefined {
  if (!siteUrl) return undefined;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl.replace(/\/$/, "")}${clean}`;
}

export type NavItem = { href: string; label: string };

export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
];
