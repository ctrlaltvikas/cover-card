/**
 * Cover Card 3D - Main Application Orchestrator
 * Integrates config, physics, particles, audio, vCard generator, and DOM rendering.
 */

(function () {
  'use strict';

  // SVG Icon Registry for crystal-clear vector rendering
  const ICONS = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.83a1.47 1.47 0 0 0-1.47 1.47 1.47 1.47 0 0 0 1.47 1.47 1.47 1.47 0 0 0 1.47-1.47c0-.82-.66-1.47-1.47-1.47z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    flip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    soundOn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    soundOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    vcard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 7h.01M12 7h4M8 11h8M8 15h5"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    gyro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`
  };

  const config = window.CARD_CONFIG || {};

  class App {
    constructor() {
      this.cardScene = document.getElementById('card-scene');
      this.card3d = document.getElementById('card-3d');
      this.cosmosCanvas = document.getElementById('bg-canvas');
      this.toastEl = document.getElementById('toast-notice');

      this.currentTheme = config.themes ? config.themes[0].id : 'prism';

      this.init();
    }

    init() {
      this.renderCardContent();
      this.initParticles();
      this.initPhysics();
      this.initAudioAndHUD();
      this.initEventListeners();
      this.startClock();
    }

    renderCardContent() {
      const p = config.profile || {};

      // 1. Front Avatar Setup with graceful fallback
      const avatarImg = document.getElementById('card-avatar');
      if (avatarImg) {
        avatarImg.src = p.avatar || 'avatar.jpg';
        avatarImg.onerror = () => {
          if (p.avatarFallback && avatarImg.src !== p.avatarFallback) {
            avatarImg.src = p.avatarFallback;
          }
        };
      }

      // 2. Name, Role, Bio, Status
      const nameEl = document.getElementById('profile-name');
      if (nameEl) nameEl.textContent = p.name || 'Vikas Kumar Yadav';

      const roleEl = document.getElementById('profile-role');
      if (roleEl) roleEl.textContent = p.role || 'Creative Technologist';

      const bioEl = document.getElementById('profile-bio');
      if (bioEl) bioEl.innerHTML = p.bio || '';

      const passChip = document.getElementById('pass-id-chip');
      if (passChip) passChip.textContent = p.passId || 'CC-2026';

      const backPassTitle = document.getElementById('back-pass-title');
      if (backPassTitle) backPassTitle.textContent = `${p.name} • PASS`;

      const backEdition = document.getElementById('back-edition');
      if (backEdition) backEdition.textContent = p.edition || 'VIP SPEC 2026';

      const statusBadgeText = document.querySelector('.card-front .status-badge span:last-child');
      if (statusBadgeText && p.status) {
        statusBadgeText.textContent = p.status;
      }

      // Telemetry Stats Hydration
      if (config.stats) {
        config.stats.forEach(st => {
          if (st.id) {
            const el = document.getElementById(st.id);
            if (el) el.textContent = st.value;
          }
        });
      }

      // 3. Social Shelf Rendering
      const socialShelf = document.getElementById('social-shelf');
      if (socialShelf && config.socials) {
        socialShelf.innerHTML = config.socials.map(item => {
          const iconSvg = ICONS[item.icon] || ICONS.github;
          return `
            <a href="${item.url}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="social-pill" 
               data-id="${item.id}"
               aria-label="${item.name}" 
               title="${item.name} (${item.username})">
              ${iconSvg}
            </a>
          `;
        }).join('');
      }

      // 4. Skills Matrix on Back
      const skillsMatrix = document.getElementById('skills-matrix');
      if (skillsMatrix && config.skills) {
        skillsMatrix.innerHTML = config.skills.map(skill => {
          return `<span class="tech-chip interactive-tag" title="Proficiency: ${skill.level}">${skill.name}</span>`;
        }).join('');
      }

      // 5. QR Code Setup (Profile link)
      const qrCanvas = document.getElementById('qr-canvas-wrap');
      if (qrCanvas) {
        const qrUrl = (config.socials && config.socials[0] && config.socials[0].url) || window.location.href;
        const encodedUrl = encodeURIComponent(qrUrl);
        qrCanvas.innerHTML = `
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodedUrl}&margin=0&color=07090e" 
               alt="Personal Pass QR Code" 
               loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          <div style="display:none; font-family:var(--font-mono); font-size:10px; color:#0f172a; text-align:center; padding:10px;">
            ${p.name}<br/>@${config.socials[0].username}
          </div>
        `;
      }

      // 6. Theme Swatches in HUD
      const swatchContainer = document.getElementById('theme-swatch-list');
      if (swatchContainer && config.themes) {
        swatchContainer.innerHTML = config.themes.map((t, idx) => {
          return `
            <div class="theme-swatch ${idx === 0 ? 'active' : ''}" 
                 data-theme="${t.id}" 
                 style="background: ${t.preview}" 
                 title="${t.name}"></div>
          `;
        }).join('');
      }
    }

    initParticles() {
      if (this.cosmosCanvas) {
        this.cosmos = new window.ParticleCosmos('bg-canvas');
      }
    }

    initPhysics() {
      if (this.card3d && this.cardScene) {
        this.physics = new window.CardPhysicsEngine(this.card3d, this.cardScene, config.physics);

        // Link card tilt to cosmos camera parallax
        this.physics.onUpdate = (rotX, rotY) => {
          if (this.cosmos) {
            this.cosmos.setParallax(rotX, rotY);
          }
        };
      }
    }

    initAudioAndHUD() {
      // Audio button toggle
      const soundBtn = document.getElementById('hud-btn-sound');
      if (soundBtn) {
        soundBtn.innerHTML = ICONS.soundOff;
        soundBtn.addEventListener('click', () => {
          const isMuted = window.soundFx.toggleMute();
          soundBtn.innerHTML = isMuted ? ICONS.soundOff : ICONS.soundOn;
          soundBtn.classList.toggle('active', !isMuted);
          this.showToast(isMuted ? 'Audio Muted' : '3D Spatial Audio Enabled 🔊');
        });
      }

      // Flip button in HUD and Card
      const triggerFlip = () => {
        if (this.physics) {
          const isFlipped = this.physics.flip();
          const hudFlipBtn = document.getElementById('hud-btn-flip');
          if (hudFlipBtn) hudFlipBtn.classList.toggle('active', isFlipped);
        }
      };

      const hudFlipBtn = document.getElementById('hud-btn-flip');
      if (hudFlipBtn) hudFlipBtn.addEventListener('click', triggerFlip);

      const cardFlipBtns = document.querySelectorAll('.trigger-flip');
      cardFlipBtns.forEach(btn => btn.addEventListener('click', triggerFlip));

      // Theme swatches click
      document.querySelectorAll('.theme-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
          const themeId = swatch.getAttribute('data-theme');
          this.switchTheme(themeId);
          document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
          swatch.classList.add('active');
        });
      });

      // Gyroscope button (if mobile)
      const gyroBtn = document.getElementById('hud-btn-gyro');
      if (gyroBtn) {
        if ('DeviceOrientationEvent' in window) {
          gyroBtn.style.display = 'flex';
          gyroBtn.addEventListener('click', async () => {
            if (typeof window.requestGyroPermission === 'function') {
              const ok = await window.requestGyroPermission();
              this.showToast(ok ? 'Gyroscope Active 📱' : 'Gyroscope Unavailable');
            } else {
              this.showToast('Gyroscope Active 📱');
            }
            gyroBtn.classList.add('active');
          });
        } else {
          gyroBtn.style.display = 'none';
        }
      }
    }

    switchTheme(themeId) {
      this.currentTheme = themeId;
      document.body.setAttribute('data-theme', themeId);

      const themeObj = config.themes.find(t => t.id === themeId);
      if (themeObj && this.cosmos) {
        this.cosmos.setTheme(themeObj.accent, themeObj.accent2 || '#38bdf8');
      }

      if (window.soundFx) window.soundFx.playChime();
      this.showToast(`Theme: ${themeObj ? themeObj.name : themeId}`);
    }

    initEventListeners() {
      // Audio micro-interactions for links and buttons
      document.addEventListener('pointerenter', (e) => {
        if (e.target.closest('a, button, .interactive-tag, .theme-swatch')) {
          if (window.soundFx) window.soundFx.playHover();
        }
      }, true);

      document.addEventListener('click', (e) => {
        if (e.target.closest('a, button, .interactive-tag')) {
          if (window.soundFx) window.soundFx.playClick();
        }
      }, true);

      // Copy Email button
      const copyEmailBtn = document.getElementById('btn-copy-email');
      if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
          const email = (config.socials && config.socials.find(s => s.isEmail)) 
            ? config.socials.find(s => s.isEmail).username 
            : 'vikasharry03@gmail.com';
          this.copyToClipboard(email, 'Email copied to clipboard! ✉️');
        });
      }

      // Share button in HUD
      const shareBtn = document.getElementById('hud-btn-share');
      if (shareBtn) {
        shareBtn.addEventListener('click', () => {
          if (navigator.share) {
            navigator.share({
              title: `${config.profile.name} - 3D Cover Card`,
              text: config.profile.role,
              url: window.location.href
            }).catch(() => {});
          } else {
            this.copyToClipboard(window.location.href, 'Link copied to clipboard! 🔗');
          }
        });
      }

      // Save vCard button
      const vcardBtn = document.getElementById('btn-download-vcard');
      if (vcardBtn) {
        vcardBtn.addEventListener('click', () => this.generateAndDownloadVCard());
      }

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          if (this.physics) this.physics.flip();
        } else if (e.key === 'm' || e.key === 'M') {
          const soundBtn = document.getElementById('hud-btn-sound');
          if (soundBtn) soundBtn.click();
        } else if (e.key === 't' || e.key === 'T') {
          // Cycle themes
          const themes = config.themes || [];
          const currIdx = themes.findIndex(t => t.id === this.currentTheme);
          const nextIdx = (currIdx + 1) % themes.length;
          const nextTheme = themes[nextIdx];
          const swatches = document.querySelectorAll('.theme-swatch');
          if (swatches[nextIdx]) swatches[nextIdx].click();
        }
      });
    }

    startClock() {
      const clockEl = document.getElementById('live-clock');
      const updateTime = () => {
        if (!clockEl) return;
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString([], { hour12: false });
      };
      updateTime();
      setInterval(updateTime, 1000);
    }

    copyToClipboard(text, successMsg) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(successMsg);
      }).catch(() => {
        // Fallback prompt
        window.prompt('Copy to clipboard:', text);
      });
    }

    generateAndDownloadVCard() {
      const p = config.profile || {};
      const emailObj = (config.socials || []).find(s => s.isEmail);
      const email = emailObj ? emailObj.username : 'vikasharry03@gmail.com';
      const ghObj = (config.socials || []).find(s => s.id === 'github');
      const liObj = (config.socials || []).find(s => s.id === 'linkedin');

      const vcardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${p.name || 'Vikas Kumar Yadav'}`,
        `TITLE:${p.role || 'Full-Stack Engineer'}`,
        `EMAIL;TYPE=INTERNET:${email}`,
        ghObj ? `URL;TYPE=GitHub:${ghObj.url}` : '',
        liObj ? `URL;TYPE=LinkedIn:${liObj.url}` : '',
        `NOTE:${p.quote || ''}`,
        'END:VCARD'
      ].filter(Boolean).join('\r\n');

      const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${(p.name || 'contact').replace(/\s+/g, '_')}.vcf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      this.showToast('Contact card downloaded! 📇');
    }

    showToast(msg) {
      if (!this.toastEl) return;
      this.toastEl.querySelector('.toast-msg').textContent = msg;
      this.toastEl.classList.add('show');
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toastEl.classList.remove('show');
      }, 2600);
    }
  }

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new App());
  } else {
    new App();
  }
})();
