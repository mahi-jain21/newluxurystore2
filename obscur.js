/* ==========================================================================
   OBSCUR LUXURY INTERACTION ENGINE (Loro Piana × Apple × Aesop)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Configuration
  const TOTAL_FRAMES = 300;
  const FRAME_PATH = (i) =>
    `luxuryvideoframes/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

  // Preloading System
  const images = [];
  let loadedCount = 0;
  let preloadingActive = true;

  const loaderBar = document.getElementById('loader-bar-fill');
  const loaderLabel = document.getElementById('loader-label');

  // Linear Interpolation helper
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  // Initialize Canvas
  const canvas = document.getElementById('sequence-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  let currentFrame = 0;
  let targetFrame = 0;
  let rafId = null;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawFrame(index) {
    if (!canvas || !ctx) return;
    const img = images[index];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // COVER fit — identical to object-fit: cover
    const scale = Math.max(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    drawFrame(Math.round(currentFrame));
  });
  resizeCanvas();

  // Animation frame loop
  function animationLoop() {
    if (!preloadingActive && document.visibilityState === 'visible') {
      currentFrame = lerp(currentFrame, targetFrame, 0.12);
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrame)));
      
      drawFrame(frameIndex);

      if (Math.abs(currentFrame - targetFrame) > 0.01) {
        rafId = requestAnimationFrame(animationLoop);
      } else {
        rafId = null;
      }
    }
  }

  // Preload promise queue
  async function preloadFrames() {
    return new Promise((resolve) => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = FRAME_PATH(i);
        
        img.onload = img.onerror = () => {
          loadedCount++;
          const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
          if (loaderBar) loaderBar.style.width = pct + '%';
          if (loaderLabel) loaderLabel.innerText = `Calibrating frames... ${pct}%`;
          
          if (loadedCount === TOTAL_FRAMES) {
            preloadingActive = false;
            resolve();
          }
        };
        images.push(img);
      }
    });
  }

  // Scroll depth tracking
  const section = document.getElementById('sequence-section');
  const progressBar = document.getElementById('scroll-progress-bar');
  const navbar = document.getElementById('navbar');

  const beats = [
    { id: 'beat-1', start: 0.00, end: 0.15 },
    { id: 'beat-2', start: 0.18, end: 0.32 },
    { id: 'beat-3', start: 0.35, end: 0.49 },
    { id: 'beat-4', start: 0.52, end: 0.66 },
    { id: 'beat-5', start: 0.69, end: 0.83 },
    { id: 'beat-6', start: 0.86, end: 1.00 }
  ];

  function updateTextBeats(progress) {
    beats.forEach(({ id, start, end }) => {
      const el = document.getElementById(id);
      if (!el) return;
      
      const visible = progress >= start && progress <= end;
      el.classList.toggle('visible', visible);
    });
  }

  // Passive Scroll handler
  window.addEventListener('scroll', () => {
    if (preloadingActive || !section) return;

    const scrollTop = window.scrollY;
    const rect = section.getBoundingClientRect();
    const scrolled = -rect.top;
    const total = rect.height - window.innerHeight;
    const progress = Math.max(0, Math.min(1, scrolled / total));

    // Update target frame index
    targetFrame = progress * (TOTAL_FRAMES - 1);

    // Update scroll progress bar height
    if (progressBar) progressBar.style.height = (progress * 100) + '%';

    // Toggle navbar background based on scroll offset
    if (navbar) {
      if (scrollTop > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Tick smooth sequence render
    if (!rafId) {
      rafId = requestAnimationFrame(animationLoop);
    }

    // Refresh overlay displays
    updateTextBeats(progress);
  }, { passive: true });

  // Tab visibility changes gate loop
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      if (!rafId && !preloadingActive) {
        rafId = requestAnimationFrame(animationLoop);
      }
    } else {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  });

  // ──────────────────────────────────────────────────────────────────────────
  // CUSTOM CURSOR LOGIC
  // ──────────────────────────────────────────────────────────────────────────
  const cursorDotEl = document.getElementById('cursor-dot');
  const cursorRingEl = document.getElementById('cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  if (cursorDotEl && cursorRingEl) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursorDotEl.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const updateCursorRing = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      cursorRingEl.style.transform = `translate(${ringX}px, ${ringY}px)`;
      
      requestAnimationFrame(updateCursorRing);
    };
    requestAnimationFrame(updateCursorRing);

    // Expand cursor ring on clickable hovers
    const addCursorHoverClasses = () => {
      document.querySelectorAll('a, button, [data-hover], .cta-primary, .cta-secondary').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorDotEl.classList.add('expanded');
          cursorRingEl.classList.add('contracted');
        });
        el.addEventListener('mouseleave', () => {
          cursorDotEl.classList.remove('expanded');
          cursorRingEl.classList.remove('contracted');
        });
      });
    };
    addCursorHoverClasses();
  }

  // ──────────────────────────────────────────────────────────────────────────
  // BELOW THE FOLD GSAP ANIMATIONS
  // ──────────────────────────────────────────────────────────────────────────
  const initScrollReveals = () => {
    // Register scrolltrigger reveals
    const revealSections = document.querySelectorAll('.reveal-section');
    revealSections.forEach(sec => {
      gsap.fromTo(sec, 
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  };

  // ──────────────────────────────────────────────────────────────────────────
  // TOAST ALERTS & E-COMMERCE BADGE INTERACTIVE ACTIONS
  // ──────────────────────────────────────────────────────────────────────────
  const toastContainer = document.getElementById('toast-alerts-container');
  const cartBadge = document.querySelector('.cart-badge');
  let cartCount = 0;

  const createToast = (message) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-alert';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 13px; height: 13px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }, 3200);
  };

  const handleAcquisition = () => {
    cartCount++;
    if (cartBadge) {
      cartBadge.innerText = cartCount;
      cartBadge.style.transform = 'scale(1.35)';
      setTimeout(() => cartBadge.style.transform = 'scale(1)', 250);
    }
    createToast("OBSCUR Timepiece added to selection. Access key ready.");
  };

  // Bind buttons
  const acquireBtns = document.querySelectorAll('.cta-primary, #btn-acquire-yours');
  acquireBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      handleAcquisition();
    });
  });

  const learnMoreBtn = document.getElementById('btn-learn-more');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createToast("Digital archive blueprints dispatched to console.");
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // INIT LOADER AND TRIGGER SITE FADE-IN
  // ──────────────────────────────────────────────────────────────────────────
  window.addEventListener('load', async () => {
    // Await all 300 frames preloading
    await preloadFrames();

    // Short luxury transition pause
    await new Promise(r => setTimeout(r, 600));

    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      setTimeout(() => loader.remove(), 900);
    }

    // Fade in site content
    const site = document.getElementById('site');
    if (site) {
      site.style.transition = 'opacity 0.8s var(--ease-out)';
      site.style.opacity = '1';
    }

    // Draw initial frame (frame index 0)
    drawFrame(0);
    
    // Register scrolltrigger below the fold reveals
    initScrollReveals();
  });

});
