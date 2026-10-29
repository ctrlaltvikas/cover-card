/**
 * Cover Card 3D - Configuration
 * Edit this file to easily customize your 3D card profile, links, and themes.
 */

window.CARD_CONFIG = {
  profile: {
    name: "Vikas Kumar Yadav",
    handle: "@ctrlaltvikas",
    badge: "PRO DEV",
    role: "Creative Technologist & Full-Stack Engineer",
    status: "Available for Visionary Projects",
    statusActive: true,
    avatar: "avatar.jpg",
    avatarFallback: "https://avatars.githubusercontent.com/u/12607959?v=4",
    location: "Global / Remote",
    bio: "Crafting mind-bending digital experiences at the nexus of <span class='highlight'>interactive 3D physics</span>, <span class='highlight'>spatial UI/UX</span>, and <span class='highlight'>high-performance code</span>.",
    passId: "CC-VK-9021",
    edition: "HOLOGRAM EDITION 2026",
    quote: "Simplicity is the ultimate sophistication in physics and code."
  },

  socials: [
    {
      name: "GitHub",
      id: "github",
      url: "https://github.com/ctrlaltvikas",
      username: "ctrlaltvikas",
      icon: "github"
    },
    {
      name: "LinkedIn",
      id: "linkedin",
      url: "https://linkedin.com/in/ctrlaltvikas",
      username: "ctrlaltvikas",
      icon: "linkedin"
    },
    {
      name: "Instagram",
      id: "instagram",
      url: "https://instagram.com/ctrlaltvikas",
      username: "ctrlaltvikas",
      icon: "instagram"
    },
    {
      name: "Medium",
      id: "medium",
      url: "https://medium.com/@ctrlaltvikas",
      username: "@ctrlaltvikas",
      icon: "medium"
    },
    {
      name: "Email",
      id: "email",
      url: "mailto:vikasharry03@gmail.com",
      username: "vikasharry03@gmail.com",
      icon: "email",
      isEmail: true
    }
  ],

  skills: [
    { name: "Three.js & WebGL", level: "Advanced" },
    { name: "Physics & Shaders", level: "Advanced" },
    { name: "React / Next.js", level: "Expert" },
    { name: "Spatial UI / UX", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Node.js & APIs", level: "Advanced" },
    { name: "Creative Coding", level: "Expert" },
    { name: "Web Audio & Haptics", level: "Pro" }
  ],

  stats: [
    { label: "EXPERIENCE", value: "7+ Yrs" },
    { label: "FOCUS", value: "3D & Systems" },
    { label: "SECURITY", value: "CLASS A" }
  ],

  themes: [
    {
      id: "prism",
      name: "Cyber Hologram",
      accent: "#a855f7",
      glow: "rgba(168, 85, 247, 0.4)",
      preview: "linear-gradient(135deg, #a855f7, #38bdf8, #ec4899)"
    },
    {
      id: "solaris",
      name: "Solaris Gold",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.4)",
      preview: "linear-gradient(135deg, #f59e0b, #fbbf24, #d97706)"
    },
    {
      id: "borealis",
      name: "Arctic Aurora",
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.4)",
      preview: "linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)"
    },
    {
      id: "stealth",
      name: "Obsidian Stealth",
      accent: "#e2e8f0",
      glow: "rgba(226, 232, 240, 0.25)",
      preview: "linear-gradient(135deg, #334155, #64748b, #cbd5e1)"
    }
  ],

  physics: {
    maxTiltDeg: 24,           // Maximum degrees of card rotation
    springStiffness: 0.08,    // Responsiveness of spring
    springDamping: 0.86,      // Friction damping factor
    idleLevitation: true,     // Gentle hovering in idle mode
    ambientParallax: 1.5,     // Background camera parallax multiplier
    enableAudio: true,        // Web Audio synthetic sounds
    enableHaptics: true       // Mobile device vibration
  }
};
