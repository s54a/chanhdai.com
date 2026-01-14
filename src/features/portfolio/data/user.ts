import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Sooraj",
  lastName: "Gupta",
  displayName: "Sooraj Gupta",
  username: "s54a",
  gender: "male",
  pronouns: "he/him",

  bio: "Full Stack Engineer. Building things that actually work.",
  flipSentences: [
    "Full Stack Engineer",
    "Building things that actually work",
    "Learning by shipping",
  ],

  address: "Jabalpur, Madhya Pradesh, India",
  phoneNumber: "KzkxLTg4OC05MjgtMzg3Mw==",
  email: "ZGV2QHM1NGEuaW4=",
  website: "https://s54a.in",

  jobTitle: "Full Stack Engineer",

  jobs: [
    {
      title: "Full Stack Engineer",
      company: "Business Culture",
      website: "https://businessculture.co.in",
    },
  ],

  about: `
- **Full Stack Engineer** focused on building practical, performant web applications.
- Strong with **JavaScript, TypeScript, React, Next.js**, and modern tooling.
- Comfortable working across frontend, backend, and tooling when needed.
- Learns fast, ships faster, and prefers clarity over over-engineering.
- Actively exploring system design, performance, and real-world scalability.
  `,

  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/chanhdai.mp3",

  timeZone: "Asia/Kolkata",

  keywords: [
    "sooraj",
    "sooraj gupta",
    "soorajgupta",
    "s54a",
    "full stack engineer",
    "react developer",
    "nextjs",
    "typescript",
    "javascript",
    "web development",
  ],

  dateCreated: "2026-01-14",
} satisfies User;
