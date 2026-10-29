# 🎴 Cover Card 3D — Next-Gen Holographic Spatial Profile

A mind-blowing, physics-driven, 3D holographic personal cover card built with modern web technologies, spatial UI/UX design, real-time spring dynamics, and Web Audio synthesis. Fully responsive across desktop, tablet, and mobile with native gyroscope spatial tracking.

![Cover Card 3D Preview](avatar.jpg)

---

## ✨ Features That Blow Minds

### 1. 🧲 Real-Time Rigid-Body Physics & Spring Dynamics
- **Damped Harmonic Spring Mechanics**: Card rotation and elevation respond with realistic mass, velocity, momentum, and smooth friction damping.
- **Zero-Gravity Idle Levitation**: When untouched, the card floats in zero-gravity with a gentle dual-harmonic Lissajous 3D orbit.
- **Dynamic 3D Cast Shadow**: Shadows dynamically extend, soften, and shift based on the card's 3D pitch and elevation.

### 2. 🌈 Holographic Iridescent Foil & Specular Lighting
- **Prismatic Diffraction Grating**: Real-time holographic rainbow foil sheen that shifts color spectra based on rotation angles.
- **Dynamic Raycast Specular Glare**: Concentrated surface glare glints across the frosted glass as you tilt the card.
- **Edge Bevel & Rim Illumination**: 3D extruded rim highlight creates tangible physical credit-card / VIP badge depth.

### 3. 🪐 Multi-Plane Spatial Parallax ("Deep Glass")
- The card is not flat! Elements float on discrete Z-planes:
  - **Z: 44px** — Floating Avatar with continuous conic chromatic glow ring.
  - **Z: 42px** — Social action pills with magnetic hover elevation.
  - **Z: 34px** — Name, title badge, and profile metadata.
  - **Z: 24px** — Live status indicator beacon.
  - **Z: 0px** — Frosted glass base (`backdrop-filter: blur(24px)`).

### 4. 🔄 Double-Sided 3D Card Flip (VIP Developer Pass)
- Flip the card with the **Flip Pass** button, floating HUD icon, or keyboard shortcut (`Space` / `F`).
- **Back Side — High-Tech VIP Pass**:
  - Embedded dynamic scannable QR code.
  - Interactive skill chips with 3D levitation.
  - Real-time local clock and telemetry status.
  - One-click **Save Contact (vCard .vcf)** download.

### 5. 🌌 Interactive Particle Cosmos Background
- 60–120 FPS high-performance 2D/3D Canvas particle constellation.
- **Gravitational Repulsion**: Stars and dust gently scatter away from your cursor.
- **Camera Parallax**: The entire background constellation shifts in 3D opposite to card tilt for deep spatial immersion.

### 6. 🔊 Web Audio API Synthesizer
- 100% synthetic sound design — zero audio files to download!
- Smooth glass ticks, air-displacement flip whooshes, and harmonic chord chimes for theme switches.
- Toggle mute anytime with the floating HUD button or press `M`.

### 7. 📱 Mobile Gyroscope & Touch Gestures
- **Physical Gyroscope Tracking**: Tilt your phone in physical space to rotate the 3D card!
- **Smooth Touch Drag & Inertia**: Drag with single finger to examine the card in 3D.
- Auto-responsive layout tailored for screens from iPhone SE up to ultra-wide 4K displays.

### 8. 🎨 4 Dynamic Color Themes
- **Cyber Prism**: Holographic neon violet, cyan, and magenta.
- **Solaris Gold**: Obsidian, amber, and titanium champagne gold.
- **Arctic Aurora**: Deep emerald, arctic teal, and cyan borealis.
- **Obsidian Stealth**: Midnight dark mode with diamond silver accents.

---

## ⚡ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| <kbd>Space</kbd> or <kbd>F</kbd> | Flip between Front and Back face |
| <kbd>T</kbd> | Cycle through Color Themes |
| <kbd>M</kbd> | Toggle Sound Effects (Mute / Unmute) |

---

## 🛠️ Quick Customization

All your profile details, socials, skills, and physics tuning are organized in [`js/config.js`](js/config.js):

```javascript
window.CARD_CONFIG = {
  profile: {
    name: "Vikas Kumar Yadav",
    role: "Creative Technologist & Full-Stack Engineer",
    avatar: "avatar.jpg",
    bio: "Crafting mind-bending digital experiences...",
    passId: "CC-VK-9021"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/ctrlaltvikas", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/ctrlaltvikas", icon: "linkedin" },
    { name: "Email", url: "mailto:vikasharry03@gmail.com", icon: "email", isEmail: true }
  ],
  skills: [
    { name: "Three.js & WebGL", level: "Advanced" },
    { name: "Physics & Shaders", level: "Advanced" },
    { name: "React / Next.js", level: "Expert" }
  ]
};
```

To replace the avatar, simply overwrite [`avatar.jpg`](avatar.jpg) or specify any image URL in `config.js`.

---

## 🚀 Deployment (GitHub Pages)

This project is 100% static and requires zero build steps or gem installations.

1. Push your changes to the `gh-pages` branch (or `main` / `master`):
   ```bash
   git add .
   git commit -m "Revamp cover-card with 3D physics holographic experience"
   git push origin gh-pages
   ```
2. In GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose your branch.
4. Your site will be live instantly!

---

## 📄 License

MIT © [Vikas Kumar Yadav](https://github.com/ctrlaltvikas)
