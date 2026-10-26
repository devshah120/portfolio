# AGENTS.md — Dev Shah Portfolio

## 1. Mission

Build a distinctive, production-quality personal portfolio for Dev Shah, a Software Engineer based in Ahmedabad, India.

> **Content sources.** All content is Dev Shah's: identity and contact details in `lib/site.ts`, shared bio text in `content/profile.ts`, projects in `content/projects.ts`, and the resume in `public/dev-shah-resume.pdf`. The hero shows an animated code-editor card (`components/graphics/CodeCard.tsx`). Dev Shah does not want a photo or any ASCII/text-art graphic in the hero.

This is a new project. Build a polished website with Next.js App Router, TypeScript, excellent technical SEO, carefully engineered motion, and selective 3D graphics.

The website must feel like a custom-designed digital experience, not a generic developer template.

Priorities, in order:

1. Accurate professional positioning and compelling project case studies.
2. Distinctive design and a coherent visual identity.
3. Excellent SEO, accessibility, and responsive behavior.
4. Purposeful GSAP animations and custom 3D/vector graphics.
5. A functional lead-capture and meeting-booking experience.
6. Maintainable architecture and strong runtime performance.

## 2. Required Routes

Four primary navigation destinations:

* `/` — Home
* `/projects` — Project index
* `/resume` — Resume
* `/about` — About and contact

Additional supporting routes:

* `/projects/[slug]` — Individual project case studies.

The site has four primary pages, not just four total URLs.

Every project in `content/projects.ts` must be represented in the project index and available through a case-study route. Use progressive disclosure and visual hierarchy rather than presenting all projects as equally important.

## 3. Personal Brand and Positioning

Name: Dev Shah

Primary title: Software Engineer (confirmed by Dev Shah — do not use "Full-Stack Developer", "Software Development Engineer" or "Frontend Engineer")

Location: Ahmedabad, India (timezone UTC+5:30, IST).

Identity values live in `lib/site.ts` (`name`, `location`, `city`, `cityCode`, `countryCode`, `timezone`). Change them there rather than hardcoding them in components.

Professional focus (from Dev Shah's resume and projects):

* Software Development Engineer at Lemtoj Infotech (Jan 2025 – present): React and Node.js web applications, SQL and NoSQL database design.
* Flutter mobile apps for Android and iOS (Padhaku, PaisaSplit).
* Live GPS tracking and fleet operations (TrackOwl: Teltonika trackers, Traccar, React, Node.js).
* MERN-stack and Web3 projects (NFT Bazaar with Solidity, Campus360 — Student Life Cycle Management System, Travel Buddy).
* MCA and BCA from GLS University; SSIP 2022 regional round winner; Microsoft AI-900.

Use a concise, confident, engineering-focused voice.

Avoid exaggerated claims such as “world-class engineer,” fabricated business impact, invented user counts, or unsupported performance metrics.

The portfolio should demonstrate engineering judgment, implementation experience, and the ability to work on real products.

## 4. Design Direction: Dark Editorial Brutalism

Combine three compatible styles:

1. Raw brutalism: strong contrast, visible borders, geometric structure, and deliberate asymmetry.
2. Editorial design: oversized typography, generous spacing, carefully composed layouts, and clear information hierarchy.
3. Experimental interaction design: kinetic typography, responsive vector graphics, and one memorable 3D centerpiece.

The current visual direction is a dark "index wall": charcoal surfaces, hairline-bordered module cards with corner registration marks, a cursor spotlight on hover, numbered section labels (`01 / Selected work`), and a faint blueprint grid behind page heroes.

### Palette

Tokens are defined in `app/globals.css` (`:root`):

* Background: `#101113` (`--bg`), deep background `#0A0B0C` (`--bg-deep`)
* Card surface: `#17181B` (`--card`)
* Text: `#E8E5DE` (`--fg`), soft text `#8F939A` (`--fg-soft`), faint text `#5A6068` (`--fg-faint`)
* Lines: `#2D3035` (`--line`), strong line `#4A4E55` (`--line-strong`)
* Accent coral: `#FF6B55` (`--accent`)
* Status green: `#34C97B` (`--ok`)

Use the accent sparingly: the primary CTA, index numbers, highlighted heading words, and focus states. Do not use coral for every interactive element.

### Typography

* Bricolage Grotesque (variable, self-hosted in `public/fonts/`) for everything: display headings at weight 800, body text, and bold uppercase labels and buttons.
* CSS variables: `--font-display`, `--font-sans`, `--font-label`.
* The hero name is uppercase, on a single line, sized to fit its column at every breakpoint.
* Keep code in the hero code-editor card in a true monospace font.

### Visual rules

* Use bold, carefully chosen display typography.
* Establish a consistent grid and spacing scale.
* Use sharp corners and 1px hairline borders as the default.
* Use oversized type and large project identifiers selectively.
* Alternate `--bg` and `--bg-deep` sections to establish rhythm.
* Use technical labels, annotations, and fine grid lines as purposeful visual details.
* Give each project a distinct visual treatment while preserving a consistent design system.
* Keep mobile layouts intentional, not merely compressed desktop layouts.

Do not use generic AI landing-page aesthetics, excessive glassmorphism, gratuitous gradients, random floating cards, or decorative elements that compete with the content.

## 5. Home Page

The first viewport must establish identity, engineering focus, and a memorable visual signature.

Include:

* Compact, distinctive navigation.
* Name and professional positioning.
* A concise introduction.
* Combined kinetic typography and interactive 3D/vector artwork.
* A prominent route into the project portfolio.
* A direct “Book a meeting” action.
* A secondary “Start a project” action.
* A selected-project section.
* A professional capabilities section.
* A brief personal introduction.
* A contact CTA and footer.

Use a message such as “I build digital systems” as a possible creative direction, not mandatory final copy.

The hero must communicate its essential message immediately. Do not make visitors wait for an elaborate animation to finish before the content becomes readable.

## 6. Projects and Case Studies

Create a visually distinctive project index at `/projects`.

Project content lives in `content/projects.ts`. All projects are Dev Shah's own work.

| # | Project | Source | Selected work (home) |
|---|---|---|---|
| 01 | Padhaku — learning app for school students in Gujarat (Flutter) | Details supplied by Dev Shah; live on Google Play and the App Store | Yes |
| 02 | TrackOwl — fleet management and live GPS tracking platform (React, Node.js, Traccar) | Details supplied by Dev Shah | Yes |
| 03 | PaisaSplit — expense-sharing app with UPI settle-up (Flutter) | Details supplied by Dev Shah; live on Google Play | Yes |
| 04 | Travel Buddy — Android travel-booking app with an OpenAI chatbot | Resume + GitHub | Yes |
| 05 | NFT Bazaar — decentralized NFT marketplace (MERN + Solidity) | Resume + GitHub + live site | No |
| 06 | Campus360 — Student Life Cycle Management System (MERN; name chosen by Dev Shah, resume calls it "Student Life Cycle Management System") | Resume | No |

* Selected work order (chosen by Dev Shah): Padhaku, TrackOwl, PaisaSplit, Travel Buddy.
* Work type (confirmed by Dev Shah): Padhaku and TrackOwl are freelance; PaisaSplit, Travel Buddy, NFT Bazaar and Campus360 are personal projects, labeled "Independent".
* `url` and `outcomes` are optional. Leave them out rather than inventing links or results.
* Do not invent projects, features, metrics or links for Dev Shah. New projects need details from Dev Shah, the resume, or Dev Shah's public GitHub.

### Case-study structure

Use a consistent structure for all projects:

1. Project title and concise summary.
2. Project type, technologies, and relevant links (no "Role" row — removed at Dev Shah's request).
3. Context and problem.
4. My responsibilities.
5. Implementation and important technical decisions.
6. Challenges and trade-offs, where known.
7. Relevant screenshots or custom diagrams.
8. Outcomes and lessons, where substantiated.
9. Links to the live project and source code, where available.
10. Navigation to the next project.

Do not fabricate project history, private client information, screenshots, outcomes, metrics, or source repositories.

Make the distinction between professional work, freelance work, and independent projects visible.

Use a curated visual hierarchy on the home page, while keeping every supplied project discoverable.

## 7. Resume Page

Build `/resume` as a semantic, indexable HTML page.

Include:

* Professional summary.
* Work experience.
* Selected projects.
* Technical skills.
* Education.
* Professional links.
* Email contact.
* A downloadable PDF resume, after the source file is added to the project.

Use the supplied resume as the content source of truth.

Do not make the resume page an image or an embedded PDF alone. Visitors and search engines must be able to read the content in HTML.

Do not silently invent employment dates, degrees, certifications, or achievements.

## 8. About Page

Build `/about` as a personal but professionally focused page.

Include:

* A concise introduction.
* Engineering approach and problem-solving philosophy.
* Experience across SaaS, frontend engineering, and independent product development.
* Relevant technical interests.
* Professional links.
* Email contact.
* Cal.com booking action.
* Lead inquiry form.
* Optional secondary interactive visual.

Keep biographical details factual. Ask for additional personal information rather than inventing stories or interests.

## 9. Cal.com and Lead Generation

Use the booking URL from `site.bookingUrl` in `lib/site.ts` everywhere a direct meeting action is required.

The current value is Dev Shah's own link: `https://cal.com/dev-shah`.

Create a reusable booking CTA that opens the Cal.com page.

Use clear labels such as:

* Book a meeting
* Schedule a call
* Discuss a project

Open the booking page in a predictable, accessible way. If opening a new tab, use safe link attributes.

### Lead form

Provide a functional inquiry form with:

Required:

* Name
* Email
* Project type
* Project description

Optional:

* Company or organization
* Budget range
* Preferred timeline

Keep the form concise. Do not request unnecessary personal information.

### Submission workflow

1. Validate fields on the client for usability.
2. Validate and sanitize input on the server.
3. Apply appropriate spam protection and submission rate limiting.
4. Send the inquiry to the configured destination email using an approved email provider or server-side service.
5. Return a success state only when the provider confirms successful acceptance of the email request.
6. Display a confirmation message.
7. Offer a direct “Book a meeting” button linked to Cal.com.

The visitor must also be able to open Cal.com without submitting the form.

### Email and security requirements

* Keep API keys and credentials in server-side environment variables.
* Never expose email-service credentials in client-side bundles.
* Do not store submitted lead data in a database unless explicitly approved.
* Do not log message bodies or unnecessary personal information.
* Validate email addresses and enforce reasonable input length limits.
* Include a clear error state and allow users to retry.
* Use an approved provider such as Resend only after the provider and required configuration are approved.
* Do not invent destination email addresses or pretend email delivery is configured.
* Document the environment variables needed for local development and production.

If a service requires credentials, implement the integration boundary and document the setup instead of embedding dummy credentials.

## 10. Animation System

Use GSAP and ScrollTrigger for balanced, intentional animation.

The visual signature should combine:

* Kinetic display typography.
* One interactive 3D or geometric centerpiece.
* Subtle cursor-responsive vector effects.
* Project image or graphic reveals.
* Section entrances and restrained parallax.
* Clear navigation and hover feedback.

Avoid animating every element. Animation should establish hierarchy, reinforce interaction, and give the website a distinctive identity.

### Implementation constraints

* Keep essential text and navigation outside WebGL canvases.
* Use server-rendered HTML for primary content.
* Isolate browser-dependent animation code inside client components.
* Dynamically load heavy 3D components when appropriate.
* Avoid blocking initial content on WebGL initialization.
* Clean up GSAP timelines, ScrollTriggers, event listeners, and graphics resources.
* Avoid scroll hijacking and excessive pinning.
* Respect `prefers-reduced-motion`.
* Provide static fallbacks for unsupported or disabled animation.
* Keep touch interactions usable.
* Avoid layout shifts and excessive CPU/GPU use.

Use React Three Fiber and Three.js only if the final visual warrants their additional bundle and rendering costs. Prefer SVG for lightweight vector effects.

Do not install multiple overlapping animation libraries without a specific requirement.

## 11. Next.js Architecture

Use Next.js App Router and TypeScript.

Use Server Components by default. Use Client Components for interactive state, browser APIs, GSAP, form interactions, and WebGL.

Suggested structure:

* `app/` — Routes, layouts, metadata, sitemap, robots.
* `components/layout/` — Header, navigation, footer.
* `components/sections/` — Hero, featured work, capabilities, CTA.
* `components/animation/` — GSAP and motion components.
* `components/graphics/` — SVG and 3D components.
* `components/projects/` — Project cards and case-study sections.
* `components/contact/` — Lead form and booking CTA.
* `content/projects/` or an equivalent typed data source — Project content.
* `lib/` — Shared utilities and configuration.
* `public/` — Images, icons, fonts, and approved assets.

This structure is a guideline, not a reason to create excessive abstraction.

Use reusable components where they simplify maintenance. Keep case-study content easy to edit.

Start with a stable supported Next.js release and compatible dependencies. Verify compatibility before installing packages.

## 12. SEO

Implement technical SEO from the start.

Requirements:

* Unique page titles and meta descriptions.
* Canonical URLs.
* Open Graph metadata.
* Appropriate social-sharing images.
* `app/sitemap.ts`.
* `app/robots.ts`.
* Semantic HTML and heading hierarchy.
* Descriptive internal links.
* Appropriate image alt text.
* Optimized images and fonts.
* Stable URLs for all case studies.
* Structured data only where accurate.
* No fabricated ratings, reviews, or professional claims.
* Meaningful content in the initial HTML response.

Use the Next.js Metadata API and metadata file conventions where appropriate.

Do not hardcode a guessed production domain. Keep the site URL configurable until the final domain is selected.

Do not block essential text behind client-side rendering, animation completion, or a canvas.

## 13. Accessibility and Responsive Design

* Support keyboard navigation.
* Provide visible focus indicators.
* Use semantic buttons and links.
* Associate form fields with accessible labels.
* Make errors and submission status accessible.
* Maintain adequate color contrast.
* Support reduced-motion preferences.
* Avoid horizontal overflow.
* Ensure the navigation works on touch devices.
* Provide usable fallbacks for 3D effects.
* Test all primary pages at mobile, tablet, and desktop sizes.

## 14. Performance and Quality

* Optimize images and font loading.
* Lazy-load expensive visual experiences when appropriate.
* Avoid unnecessary client-side JavaScript.
* Avoid large assets without a clear visual benefit.
* Keep initial content fast and stable.
* Check for hydration errors and console warnings.
* Test the production build.
* Review Core Web Vitals and Lighthouse results.
* Confirm all internal and external links.
* Test lead-form validation and success/error handling.
* Verify that the Cal.com CTA works.

Do not promise a perfect Lighthouse score. Report actual results and address material issues.

## 15. Development Sequence

Work in controlled phases.

### Phase 1 — Foundation

* Initialize Next.js with TypeScript and App Router.
* Establish project scripts, styling, and design tokens.
* Define typography, spacing, grid, and breakpoints.
* Create the shared layout, navigation, and footer.

### Phase 2 — Visual identity

* Develop the hero composition.
* Create the kinetic typography.
* Build the custom SVG/3D graphic.
* Validate responsive behavior and performance before expanding animation.

### Phase 3 — Content

* Build the home page.
* Build the project index.
* Create the reusable case-study template.
* Add Dev Shah's project entries.
* Build the resume and about pages.

### Phase 4 — Contact workflow

* Add the Cal.com CTA.
* Build the lead form.
* Integrate the approved server-side email provider.
* Add validation, spam protection, success states, and error handling.

### Phase 5 — SEO and testing

* Configure metadata and canonical URLs.
* Add sitemap and robots files.
* Add accurate structured data where appropriate.
* Test accessibility, responsiveness, navigation, form behavior, and performance.
* Run the production build and fix errors.

At the end of each phase, summarize changes, important decisions, unresolved configuration, and test results.

## 16. Project Rules

* Treat the supplied resume and portfolio PDF as the source of truth.
* Do not fabricate claims or project details.
* Do not expose secrets.
* Do not install unnecessary dependencies.
* Do not commit, push, or deploy without authorization.
* Do not connect analytics or external data collection without approval.
* Do not overwrite user work.
* Do not report tests as passing unless executed.
* Ask for missing credentials or private content instead of guessing.
* Prefer small, maintainable changes over unnecessary complexity.

## 17. Definition of Done

The project is complete when:

* All four primary pages are implemented.
* All of Dev Shah's projects are represented and linked to suitable case studies.
* The hybrid brutalist design is coherent across the site.
* The hero combines kinetic typography with a purposeful 3D/vector visual.
* Animations are balanced, responsive, accessible, and performant.
* The resume is available as readable HTML, with a PDF download when supplied.
* The Cal.com booking CTA works.
* The lead form has real server-side validation and email integration once configured.
* Success and error states work correctly.
* SEO metadata, sitemap, and robots are configured.
* Mobile and desktop layouts are usable.
* The production build succeeds.
* Remaining setup requirements and unverified claims are documented.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
