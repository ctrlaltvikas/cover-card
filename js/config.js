/**
 * Cover Card 3D - Configuration
 * Powered by profile data from github.com/ctrlaltvikas
 */

window.CARD_CONFIG = {
  profile: {
    name: "Vikas Kumar Yadav",
    handle: "@ctrlaltvikas",
    badge: "GOVT OFFICER",
    role: "Govt Officer | Digital Transformation Strategist",
    status: "Digital Strategy & Innovation (NABARD)",
    statusActive: true,
    avatar: "https://avatars.githubusercontent.com/u/12607959?v=4",
    avatarFallback: "avatar.jpg",
    location: "Mumbai / Global",
    bio: "Govt officer & Digital Transformation Strategist (NABARD). Ex-PwC, Ex-Microsoft. Creator of <span class='highlight'>Awesome-Bash-Aliases</span> and <span class='highlight'>Indian-government-API-List</span>.",
    passId: "CC-VK-9YRS",
    edition: "DIGITAL STRATEGY PASS 2026",
    quote: "Democratizing digital public infrastructure with open architecture and terminal efficiency."
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

  // Skills tailored to Vikas Kumar Yadav's background (Ex-MSFT, Ex-PwC, NABARD, Open Source)
  skills: [
    { name: "Digital Transformation", level: "Expert" },
    { name: "Enterprise Architecture", level: "Expert" },
    { name: "GovTech & DPI APIs", level: "Expert" },
    { name: "Cloud & DevOps (Ex-MSFT)", level: "Advanced" },
    { name: "Linux & Bash Automation", level: "Master" },
    { name: "Data Strategy & Governance", level: "Advanced" },
    { name: "Full-Stack & Python", level: "Advanced" },
    { name: "Systems Security & Advisory", level: "Senior" }
  ],

  stats: [
    { label: "EXPERIENCE", value: "9+ Yrs", id: "stat-experience" },
    { label: "DOMAIN", value: "GovTech & DPI", id: "stat-domain" },
    { label: "SECURITY", value: "CLASS A", id: "stat-security" }
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
