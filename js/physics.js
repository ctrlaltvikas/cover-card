/**
 * Cover Card 3D - Physics Engine
 * Implements rigid-body spring dynamics, 3D Euler rotation,
 * dynamic holographic specular light calculation, and gyroscope spatial tilt.
 */

class CardPhysicsEngine {
  constructor(cardEl, containerEl, options = {}) {
    this.card = cardEl;
    this.container = containerEl;
    this.options = Object.assign({
      maxTiltDeg: 24,
      springStiffness: 0.09,
      springDamping: 0.84,
      idleLevitation: true
    }, options);

    // Dynamic rotation state (degrees)
    this.currentRotX = 0;
    this.currentRotY = 0;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.velRotX = 0;
    this.velRotY = 0;

    // Translation Z (depth bobbing)
    this.currentTransZ = 0;
    this.targetTransZ = 0;
    this.velTransZ = 0;

    // Flip state
    this.isFlipped = false;
    this.currentFlipY = 0;
    this.targetFlipY = 0;
    this.velFlipY = 0;

    // Specular light coordinates (percentages 0-100)
    this.lightX = 50;
    this.lightY = 50;
    this.targetLightX = 50;
    this.targetLightY = 50;

    // Interaction tracking
    this.isPointerOver = false;
    this.isDragging = false;
    this.lastPointerTime = Date.now();
    this.idleTimer = null;
    this.gyroActive = false;
    this.gyroBaseBeta = null;
    this.gyroBaseGamma = null;

    // On-update callback (for background parallax)
    this.onUpdate = null;

    this.init();
  }

  init() {
    this.bindEvents();
    this.startLoop();
  }

  bindEvents() {
    // Pointer move on whole screen for wide tracking
    window.addEventListener('pointermove', (e) => this.handlePointerMove(e), { passive: true });
    
    // Pointer enter/leave on card
    this.container.addEventListener('pointerenter', () => {
      this.isPointerOver = true;
      this.targetTransZ = 35; // Hover elevation
    });

    this.container.addEventListener('pointerleave', () => {
      this.isPointerOver = false;
      this.targetTransZ = 0;
      this.lastPointerTime = Date.now();
    });

    // Touch / Drag events
    this.container.addEventListener('pointerdown', (e) => {
      // Don't intercept clicks on links or buttons
      if (e.target.closest('a, button, .interactive-tag')) return;
      this.isDragging = true;
      this.container.classList.add('grabbing');
    });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
      this.container.classList.remove('grabbing');
      this.lastPointerTime = Date.now();
    });

    // Gyroscope orientation
    this.initGyroscope();
  }

  handlePointerMove(e) {
    this.lastPointerTime = Date.now();

    const rect = this.card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    // Normalized coordinates (-1 to 1)
    const normX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
    const normY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

    // Clamp values
    const clampedX = Math.max(-1.4, Math.min(1.4, normX));
    const clampedY = Math.max(-1.4, Math.min(1.4, normY));

    // Physics target rotations
    // Notice: Moving pointer down tilts top edge back (positive rotX)
    this.targetRotX = -clampedY * this.options.maxTiltDeg;
    this.targetRotY = clampedX * this.options.maxTiltDeg;

    // Specular highlight tracks light source relative to card
    const cardRelX = (e.clientX - rect.left) / rect.width;
    const cardRelY = (e.clientY - rect.top) / rect.height;
    this.targetLightX = Math.max(0, Math.min(100, cardRelX * 100));
    this.targetLightY = Math.max(0, Math.min(100, cardRelY * 100));
  }

  initGyroscope() {
    if (typeof DeviceOrientationEvent === 'undefined') return;

    const handleOrientation = (e) => {
      if (e.beta === null || e.gamma === null) return;
      this.gyroActive = true;
      this.lastPointerTime = Date.now();

      // Calibrate first reading as resting tilt (~38 deg typical hand hold)
      if (this.gyroBaseBeta === null) {
        this.gyroBaseBeta = e.beta;
        this.gyroBaseGamma = e.gamma;
      }

      const deltaBeta = e.beta - this.gyroBaseBeta;
      const deltaGamma = e.gamma - this.gyroBaseGamma;

      // Map phone tilt to card angles
      this.targetRotX = Math.max(-this.options.maxTiltDeg, Math.min(this.options.maxTiltDeg, -deltaBeta * 0.7));
      this.targetRotY = Math.max(-this.options.maxTiltDeg, Math.min(this.options.maxTiltDeg, deltaGamma * 0.7));

      this.targetLightX = 50 + (this.targetRotY / this.options.maxTiltDeg) * 40;
      this.targetLightY = 50 - (this.targetRotX / this.options.maxTiltDeg) * 40;
    };

    // iOS 13+ requires user permission grant
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      window.requestGyroPermission = async () => {
        try {
          const res = await DeviceOrientationEvent.requestPermission();
          if (res === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation, true);
            return true;
          }
        } catch (err) {}
        return false;
      };
    } else {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
  }

  flip() {
    this.isFlipped = !this.isFlipped;
    this.targetFlipY = this.isFlipped ? 180 : 0;
    if (window.soundFx) window.soundFx.playFlip();
    if (navigator.vibrate) navigator.vibrate(25);
    return this.isFlipped;
  }

  setFlipped(state) {
    this.isFlipped = Boolean(state);
    this.targetFlipY = this.isFlipped ? 180 : 0;
  }

  startLoop() {
    const k = this.options.springStiffness;
    const d = this.options.springDamping;

    const step = () => {
      const now = Date.now();
      const timeSincePointer = now - this.lastPointerTime;

      // Gentle Lissajous Idle Levitation if user is inactive
      if (this.options.idleLevitation && !this.isPointerOver && !this.gyroActive && timeSincePointer > 1400) {
        const t = now * 0.0016;
        this.targetRotX = Math.sin(t * 1.1) * 7.5 + Math.cos(t * 0.7) * 2.5;
        this.targetRotY = Math.cos(t * 0.9) * 10.5 + Math.sin(t * 1.4) * 3.0;
        this.targetTransZ = Math.sin(t * 1.5) * 14;

        this.targetLightX = 50 + (this.targetRotY / this.options.maxTiltDeg) * 35;
        this.targetLightY = 50 - (this.targetRotX / this.options.maxTiltDeg) * 35;
      }

      // Spring-mass-damper integration for RotX
      const fX = (this.targetRotX - this.currentRotX) * k;
      this.velRotX = (this.velRotX + fX) * d;
      this.currentRotX += this.velRotX;

      // Spring-mass-damper integration for RotY
      const fY = (this.targetRotY - this.currentRotY) * k;
      this.velRotY = (this.velRotY + fY) * d;
      this.currentRotY += this.velRotY;

      // Elevation Z integration
      const fZ = (this.targetTransZ - this.currentTransZ) * (k * 1.2);
      this.velTransZ = (this.velTransZ + fZ) * d;
      this.currentTransZ += this.velTransZ;

      // Flip rotation integration (smooth high-stiffness spring)
      const fFlip = (this.targetFlipY - this.currentFlipY) * 0.12;
      this.velFlipY = (this.velFlipY + fFlip) * 0.82;
      this.currentFlipY += this.velFlipY;

      // Light lerp
      this.lightX += (this.targetLightX - this.lightX) * 0.1;
      this.lightY += (this.targetLightY - this.lightY) * 0.1;

      // Total Y rotation is tilt + flip
      const totalRotY = this.currentRotY + this.currentFlipY;

      // Calculate holographic iridescent gradient angle and shift
      const holoAngle = Math.atan2(this.currentRotY, this.currentRotX) * (180 / Math.PI) + 90;
      const holoShiftX = 50 + (this.currentRotY / this.options.maxTiltDeg) * 45;
      const holoShiftY = 50 - (this.currentRotX / this.options.maxTiltDeg) * 45;

      // Apply CSS variables to Card for GPU-composited 3D transforms
      this.card.style.setProperty('--rot-x', `${this.currentRotX.toFixed(2)}deg`);
      this.card.style.setProperty('--rot-y', `${totalRotY.toFixed(2)}deg`);
      this.card.style.setProperty('--trans-z', `${this.currentTransZ.toFixed(2)}px`);
      this.card.style.setProperty('--light-x', `${this.lightX.toFixed(2)}%`);
      this.card.style.setProperty('--light-y', `${this.lightY.toFixed(2)}%`);
      this.card.style.setProperty('--holo-angle', `${holoAngle.toFixed(2)}deg`);
      this.card.style.setProperty('--holo-x', `${holoShiftX.toFixed(2)}%`);
      this.card.style.setProperty('--holo-y', `${holoShiftY.toFixed(2)}%`);

      // Dynamic cast shadow on floor/backdrop
      const shadowX = (-this.currentRotY * 1.8).toFixed(1);
      const shadowY = (this.currentRotX * 1.8 + 25).toFixed(1);
      const shadowBlur = (40 + Math.abs(this.currentTransZ) * 1.5).toFixed(1);
      this.card.style.setProperty('--shadow-x', `${shadowX}px`);
      this.card.style.setProperty('--shadow-y', `${shadowY}px`);
      this.card.style.setProperty('--shadow-blur', `${shadowBlur}px`);

      if (this.onUpdate) {
        this.onUpdate(this.currentRotX, this.currentRotY);
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}

window.CardPhysicsEngine = CardPhysicsEngine;
