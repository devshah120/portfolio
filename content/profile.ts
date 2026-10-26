import { site } from "@/lib/site";

// Shared bio text, used on the About page and in structured data / llms.txt.
// Source of truth: public/dev-shah-resume.pdf and the projects in content/projects.ts.
export const profile = {
  whoIs: `${site.name} is a ${site.role} based in ${site.location}, building web applications with React and Node.js and cross-platform mobile apps with Flutter.`,
  specialties:
    "React and Node.js web applications, Flutter mobile apps for Android and iOS, MongoDB and MySQL database design, and integrations such as live GPS tracking with Traccar, payments with Razorpay and UPI links, and AI with the OpenAI API.",
  summary:
    "Web applications with React and Node.js, Flutter mobile apps, a live GPS fleet-tracking platform, and MERN-stack and Web3 projects.",
};
