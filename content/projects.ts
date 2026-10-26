export type ProjectKind = "professional" | "freelance" | "independent";

export type Project = {
  slug: string;

  no: string;
  title: string;
  tagline: string;

  type: string;
  kind: ProjectKind;
  kindLabel: string;

  org?: string;
  stack: string[];
  url?: string;
  urlLabel?: string;
  // Further live links shown after `url`, e.g. the App Store next to Google Play.
  moreLinks?: { url: string; label: string }[];
  featured?: boolean;
  context: string[];
  responsibilities: string[];
  implementation: string[];
  challenges?: string[];
  outcomes?: string[];

  accent: {
    tone: "ink" | "paper" | "signal";
    motif: "grid" | "hatch" | "dots" | "bars";
  };
};

export const projects: Project[] = [
  {
    slug: "padhaku",
    no: "01",
    title: "Padhaku",
    tagline:
      "A learning app for school students in Gujarat — study materials, practice tests, mind maps and learning games, with points and leaderboards to keep students coming back.",
    type: "Mobile learning app (Android & iOS)",
    kind: "freelance",
    kindLabel: "Freelance",
    stack: [
      "Flutter",
      "Dart",
      "Node.js",
      "MongoDB",
      "Bloc / Cubit",
      "Express 5",
      "Mongoose",
      "Preact",
      "Vite",
      "Firebase Cloud Messaging",
      "Cloudinary",
      "Razorpay",
      "Apple in-app purchases",
      "RevenueCat",
    ],
    url: "https://play.google.com/store/apps/details?id=com.bondbyte.students",
    urlLabel: "Google Play",
    moreLinks: [
      {
        url: "https://apps.apple.com/us/app/padhaku-the-learning-app/id6760719402",
        label: "App Store",
      },
    ],
    featured: true,
    context: [
      "Padhaku is a learning app for school students in Gujarat. It brings study materials, practice tests, mind maps and learning games together in one place, and uses reward points and leaderboards to keep students coming back.",
      "Content is organized by standard, subject and chapter, and the app is available in English, Gujarati, Hindi, Marathi and Tamil.",
    ],
    responsibilities: [
      "Built the student app in Flutter for Android and iOS.",
      "Implemented six kinds of practice tests: full exams, 5-minute quizzes, true/false, one-liner, match-the-following and objective test series.",
      "Built study materials and mind maps organized by standard, subject and chapter.",
      "Added learning games, leaderboards and reward points.",
      "Built an AI study chat with text-to-speech and speech-to-text.",
    ],
    implementation: [
      "Flutter (Dart) with Bloc/Cubit for state management.",
      "Product stack: Node.js and Express 5 with MongoDB (Mongoose), plus Preact with Vite.",
      "Push notifications through Firebase Cloud Messaging and media hosting on Cloudinary.",
      "Payments through Razorpay, Apple in-app purchases and RevenueCat.",
      "Screenshot protection inside the app.",
      "Localized into English, Gujarati, Hindi, Marathi and Tamil.",
    ],
    accent: { tone: "signal", motif: "dots" },
  },
  {
    slug: "trackowl",
    no: "02",
    title: "TrackOwl",
    tagline:
      "A fleet management and live GPS tracking platform for Indian transport companies — track trucks in real time and manage trips, drivers, fuel, maintenance and billing in one place.",
    type: "Fleet management & GPS tracking platform",
    kind: "freelance",
    kindLabel: "Freelance",
    stack: [
      "React 19",
      "Node.js",
      "MongoDB",
      "Traccar",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Leaflet / Google Maps",
      "Recharts",
      "Express",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "Teltonika FMB920",
      "PDFKit",
      "Nodemailer",
      "Nginx",
    ],
    featured: true,
    context: [
      "TrackOwl is a fleet management and live GPS tracking platform for Indian transport companies. Owners use it to track trucks in real time and to manage trips, drivers, fuel, maintenance and billing in one place.",
    ],
    responsibilities: [
      "Built live GPS tracking: Teltonika FMB920 trackers fitted in the trucks send data to a self-hosted Traccar server, which decodes it and forwards it to the Express API and on into MongoDB.",
      "Built a live fleet map that shows each truck as moving, idle, stopped or offline, plus public tracking links that can be shared and expire.",
      "Built trip orders with automatic numbering, driver assignment and profit per trip, along with a customer list, a daily ledger and generated PDF documents.",
      "Built fleet upkeep: fuel logging with mileage reports, service records kept separate from repair requests, automatic maintenance reminders, and tracking of individual tyres and batteries.",
      "Added storage and tracking for driver and vehicle documents.",
      "Built the platform layer: several client companies on one system, each with its own data, role-based permissions, an audit log, a device registry where trackers are added by IMEI, and an admin dashboard.",
    ],
    implementation: [
      "React 19 with Vite, Tailwind CSS and React Router; maps with Leaflet / Google Maps and charts with Recharts.",
      "Node.js and Express API with MongoDB Atlas (Mongoose) and JWT authentication.",
      "GPS pipeline: Teltonika FMB920 tracker → self-hosted Traccar server → Express API → MongoDB. Each reading is stored with location, speed and ignition status.",
      "Public tracking links expire and are stored only as a hash.",
      "PDF documents generated with PDFKit; email sent through Nodemailer.",
    ],
    accent: { tone: "paper", motif: "grid" },
  },
  {
    slug: "paisasplit",
    no: "03",
    title: "PaisaSplit",
    tagline:
      "An expense-sharing app for Indian friend groups, families and trips — track shared costs, split bills in different ways, and settle up over UPI.",
    type: "Expense-sharing mobile app",
    kind: "independent",
    kindLabel: "Independent",
    stack: [
      "Flutter",
      "Dart",
      "Node.js",
      "MongoDB",
      "Provider",
      "Express",
      "Mongoose",
      "JWT",
      "Google OAuth",
      "Firebase Cloud Messaging",
      "Google ML Kit",
      "Nodemailer",
      "GitHub Actions",
    ],
    url: "https://play.google.com/store/apps/details?id=com.bondbyte.paisasplit",
    urlLabel: "Google Play",
    featured: true,
    context: [
      "PaisaSplit is an expense-sharing app for Indian friend groups, families and trips. People track shared costs, split bills in different ways, and settle up over UPI.",
    ],
    responsibilities: [
      "Built groups with five types — Family, Friends, Couple, Trip and Office — including group photos and a balance limit.",
      "Added three ways to join a group: QR code, deep link and email invite.",
      "Built on-device receipt scanning with Google ML Kit OCR that splits a bill item by item.",
      "Built settling up through UPI and PayPal payment links.",
      "Added monthly budgets and per-person net balances across all groups.",
    ],
    implementation: [
      "Flutter (Dart) with Provider for state management.",
      "Node.js and Express API with MongoDB (Mongoose).",
      "Sign-in with JWT and Google OAuth.",
      "Receipt OCR runs on the device with Google ML Kit.",
      "Push notifications through Firebase Cloud Messaging, and email through Nodemailer.",
    ],
    accent: { tone: "paper", motif: "hatch" },
  },
  {
    slug: "travel-buddy",
    no: "04",
    title: "Travel Buddy",
    tagline:
      "An Android travel app for booking hotels, trains, flights and buses in one place, with an AI chatbot for travel questions.",
    type: "Android application",
    kind: "independent",
    kindLabel: "Independent",
    stack: ["Java", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    url: "https://github.com/devshah120/Travel-Buddy",
    urlLabel: "GitHub",
    featured: true,
    context: [
      "Travel Buddy is an Android application for booking hotel accommodation, train tickets, flights and bus tickets, bringing travel planning and management into a single app.",
    ],
    responsibilities: [
      "Developed the Android application in Java.",
      "Built the supporting API with Node.js, Express.js and MongoDB.",
      "Integrated the OpenAI API to handle travel-related queries.",
    ],
    implementation: [
      "Booking flows for hotels, trains, flights and buses in one app.",
      "An AI chatbot built on the OpenAI API for travel questions.",
      "A language translator and AR place viewing.",
      "Android app and API kept in separate repositories: Travel-Buddy and Travel-Buddy-API.",
    ],
    accent: { tone: "ink", motif: "grid" },
  },
  {
    slug: "nft-bazaar",
    no: "05",
    title: "NFT Bazaar",
    tagline:
      "A decentralized NFT marketplace for minting, buying, selling and auctioning NFTs, built on the MERN stack with Solidity.",
    type: "NFT marketplace (web app)",
    kind: "independent",
    kindLabel: "Independent",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Solidity", "Tailwind CSS", "Pinata IPFS"],
    url: "https://nft-bazzar.vercel.app",
    urlLabel: "nft-bazzar.vercel.app",
    context: [
      "NFT Bazaar is a decentralized NFT marketplace on the Polygon network for minting, buying, selling, reselling and auctioning NFTs.",
    ],
    responsibilities: [
      "Developed the marketplace on the MERN stack for buying, selling and auctioning NFTs.",
      "Integrated Solidity to connect to the blockchain, enabling secure and decentralized transactions within the marketplace.",
    ],
    implementation: [
      "React front end styled with Tailwind CSS.",
      "Node.js and Express.js backend with MongoDB.",
      "Solidity for the blockchain layer, on the Polygon network.",
      "Pinata for IPFS storage.",
      "Front end and backend in separate repositories: NFT-BAZZAR and NFT-Backend.",
    ],
    accent: { tone: "paper", motif: "bars" },
  },
  {
    slug: "campus360",
    no: "06",
    title: "Campus360",
    tagline:
      "One platform where students manage attendance, academic marks, eBooks and fee payments — and chat in real time with alumni.",
    type: "Student life cycle management web app",
    kind: "independent",
    kindLabel: "Independent",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    context: [
      "Campus360 is a student life cycle management system that brings attendance records, academic marks, eBook resources and fee payments into one platform for students, along with real-time chat with alumni.",
      "It serves four kinds of users — students, alumni, faculty and admins — each signing in to their own view of the same system.",
    ],
    responsibilities: [
      "Developed an application where students manage and access attendance records, academic marks, eBook resources and fee payments within a unified platform.",
      "Built separate access for four roles: students, alumni, faculty and admins. Faculty record attendance and marks; admins manage users, fees and eBook resources.",
      "Built real-time group chat between students and alumni to support mentorship and knowledge sharing.",
    ],
    implementation: [
      "Node.js and Express.js API with MongoDB.",
      "Sign-in with JWT, with role-based access for students, alumni, faculty and admins.",
      "Alumni chat runs on Socket.IO: group chat rooms where students and alumni talk in real time.",
    ],
    accent: { tone: "ink", motif: "dots" },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export const featuredProjects = projects.filter((p) => p.featured);
