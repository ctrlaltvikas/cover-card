/**
 * Cover Card 3D - Background Interactive Particle Cosmos
 * High-performance 60-120fps particle field with 3D perspective projection,
 * gravitational mouse repulsion, and constellation clustering.
 */

class ParticleCosmos {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.particles = [];
    this.particleCount = 110;
    this.maxConnectDist = 130;
    this.mouse = { x: -9999, y: -9999, radius: 160 };
    this.parallax = { x: 0, y: 0 };
    this.theme = {
      accent: [168, 85, 247], // RGB
      accent2: [56, 189, 248]
    };

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    // Populate 3D particles
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        z: (Math.random() - 0.5) * 400, // Depth
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.2,
        baseRadius: Math.random() * 1.8 + 0.8,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseVal: Math.random() * Math.PI
      });
    }

    // Pointer events on canvas
    window.addEventListener('pointermove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      this.mouse.x = -9999;
      this.mouse.y = -9999;
    });

    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    // Responsive particle count for mobile
    const targetCount = this.width < 768 ? 60 : 110;
    this.maxConnectDist = this.width < 768 ? 95 : 135;
    if (this.particles.length > targetCount) {
      this.particles.length = targetCount;
    }
  }

  setTheme(accentHex, accent2Hex) {
    const hexToRgb = (hex) => {
      let c = hex.replace('#', '');
      if (c.length === 3) c = c.split('').map(x => x + x).join('');
      const num = parseInt(c, 16);
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
    };

    if (accentHex) this.theme.accent = hexToRgb(accentHex);
    if (accent2Hex) this.theme.accent2 = hexToRgb(accent2Hex);
  }

  setParallax(tiltX, tiltY) {
    // Subtle camera shift opposite to card tilt
    this.parallax.x = -tiltY * 1.2;
    this.parallax.y = tiltX * 1.2;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Ambient radial glow behind the card
    const cx = this.width / 2 + this.parallax.x;
    const cy = this.height / 2 + this.parallax.y;
    const ambientGrad = this.ctx.createRadialGradient(
      cx, cy, 50,
      cx, cy, Math.max(this.width, this.height) * 0.65
    );
    const [r1, g1, b1] = this.theme.accent;
    const [r2, g2, b2] = this.theme.accent2;
    ambientGrad.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0.12)`);
    ambientGrad.addColorStop(0.5, `rgba(${r2}, ${g2}, ${b2}, 0.04)`);
    ambientGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    this.ctx.fillStyle = ambientGrad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Update and draw particles
    const pLen = this.particles.length;
    for (let i = 0; i < pLen; i++) {
      const p = this.particles[i];

      // Physics velocity
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;
      p.pulseVal += p.pulseSpeed;

      // Depth boundaries
      if (p.z > 200) p.vz = -Math.abs(p.vz);
      if (p.z < -200) p.vz = Math.abs(p.vz);

      // Screen boundaries wrap
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;
      if (p.y < -20) p.y = this.height + 20;
      if (p.y > this.height + 20) p.y = -20;

      // Mouse repulsion physics
      const dx = (p.x + this.parallax.x) - this.mouse.x;
      const dy = (p.y + this.parallax.y) - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.mouse.radius && dist > 0) {
        const force = (1 - dist / this.mouse.radius) * 1.8;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }

      // 3D Perspective scale
      const fov = 600;
      const scale = Math.max(0.3, fov / (fov + p.z));
      const renderX = p.x + this.parallax.x * scale;
      const renderY = p.y + this.parallax.y * scale;
      const pulse = 1 + Math.sin(p.pulseVal) * 0.25;
      const radius = p.baseRadius * scale * pulse;

      // Particle drawing
      const alpha = Math.min(0.85, Math.max(0.15, (p.z + 200) / 400 * 0.75));
      this.ctx.beginPath();
      this.ctx.arc(renderX, renderY, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${r1}, ${g1}, ${b1}, ${alpha})`;
      this.ctx.shadowBlur = radius * 4;
      this.ctx.shadowColor = `rgba(${r1}, ${g1}, ${b1}, ${alpha * 0.8})`;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // reset for performance

      // Proximity connection lines
      for (let j = i + 1; j < pLen; j++) {
        const p2 = this.particles[j];
        const cdx = p.x - p2.x;
        const cdy = p.y - p2.y;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cdist < this.maxConnectDist) {
          const lineAlpha = (1 - cdist / this.maxConnectDist) * 0.22 * alpha;
          this.ctx.beginPath();
          this.ctx.moveTo(renderX, renderY);
          const p2Scale = Math.max(0.3, fov / (fov + p2.z));
          this.ctx.lineTo(p2.x + this.parallax.x * p2Scale, p2.y + this.parallax.y * p2Scale);
          this.ctx.strokeStyle = `rgba(${r2}, ${g2}, ${b2}, ${lineAlpha})`;
          this.ctx.lineWidth = 0.85 * scale;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

window.ParticleCosmos = ParticleCosmos;
