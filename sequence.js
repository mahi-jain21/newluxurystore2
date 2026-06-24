(function () {
  'use strict';

  // Debug alert to check if sequence.js is parsing correctly
  console.log("sequence.js is successfully executing!");

  /* ── CONFIG ── */
  const TOTAL   = 300;
  const SECTION_HEIGHT = '700vh'; // must match CSS
  const FRAME   = (i) =>
    `luxuryvideoframes/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

  /* ── BEAT DEFINITIONS ── */
  const BEATS = [
    { id: 'beat-1', from: 0.00, to: 0.14 },
    { id: 'beat-2', from: 0.16, to: 0.30 },
    { id: 'beat-3', from: 0.32, to: 0.46 },
    { id: 'beat-4', from: 0.48, to: 0.62 },
    { id: 'beat-5', from: 0.64, to: 0.78 },
    { id: 'beat-6', from: 0.82, to: 1.00 },
  ];

  /* ── STATE ── */
  const imgs        = new Array(TOTAL);
  let loadedCount   = 0;
  let currentF      = 0;
  let targetF       = 0;
  let rafRunning    = false;
  let progress      = 0;

  /* ── ELEMENTS ── */
  let loader, loaderFill, loaderPct, canvas, ctx, section, progressBar, nudge;

  document.addEventListener('DOMContentLoaded', () => {
    loader      = document.getElementById('aethel-loader');
    loaderFill  = document.getElementById('loader-fill');
    loaderPct   = document.getElementById('loader-pct');
    canvas      = document.getElementById('hero-canvas');
    ctx         = canvas ? canvas.getContext('2d') : null;
    section     = document.querySelector('.sequence-section');
    progressBar = document.getElementById('seq-progress');
    nudge       = document.getElementById('scroll-nudge');

    if (canvas) {
      resize();
      window.addEventListener('resize', () => {
        resize();
        drawFrame(Math.round(currentF));
      });
    }

    if (loader && canvas) {
      initSequence();
    }
  });

  /* ── CANVAS RESIZE ── */
  function resize() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  /* ── COVER-FIT DRAW ── */
  function drawFrame(idx) {
    if (!canvas || !ctx) return;
    idx = Math.max(0, Math.min(TOTAL - 1, idx));
    const img = imgs[idx];
    if (!img || !img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) return;

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const cw = canvas.width;
    const ch = canvas.height;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  /* ── SMOOTH LERP LOOP ── */
  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    const prev = Math.round(currentF);
    currentF = lerp(currentF, targetF, 0.10);
    const next = Math.round(currentF);

    if (next !== prev) drawFrame(next);

    if (Math.abs(currentF - targetF) > 0.3) {
      requestAnimationFrame(tick);
    } else {
      currentF = targetF;
      drawFrame(Math.round(currentF));
      rafRunning = false;
    }
  }

  /* ── SCROLL HANDLER ── */
  function onScroll() {
    if (!section || !progressBar || !nudge) return;

    const rect    = section.getBoundingClientRect();
    const scrolled = -rect.top;
    const total    = rect.height - window.innerHeight;
    progress       = Math.max(0, Math.min(1, scrolled / total));

    targetF = progress * (TOTAL - 1);

    progressBar.style.height = (progress * 100) + '%';

    if (progress > 0.03) nudge.classList.add('hidden');
    else nudge.classList.remove('hidden');

    BEATS.forEach(({ id, from, to }) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.toggle('active', progress >= from && progress <= to);
    });

    if (!rafRunning) {
      rafRunning = true;
      requestAnimationFrame(tick);
    }
  }

  /* ── PRELOAD ── */
  function preload() {
    return new Promise((resolve) => {
      for (let i = 0; i < TOTAL; i++) {
        const img   = new Image();
        img.src     = FRAME(i + 1);
        img.onload  =
        img.onerror = () => {
          loadedCount++;
          const pct = Math.round((loadedCount / TOTAL) * 100);
          if (loaderFill) loaderFill.style.width = pct + '%';
          if (loaderPct) loaderPct.textContent  = pct + '%';
          if (loadedCount === 1) resolve();
        };
        imgs[i] = img;
      }
    });
  }

  /* ── INIT ── */
  async function initSequence() {
    window.addEventListener('scroll', onScroll, { passive: true });
    try {
      document.body.style.overflow = 'hidden';
      await preload();
      await new Promise(r => setTimeout(r, 500));
      drawFrame(0);
      onScroll();
    } catch (e) {
      console.error(e);
    } finally {
      if (loader) loader.classList.add('hidden');
      setTimeout(() => {
        if (loader) loader.style.display = 'none';
        document.body.style.overflow = '';
        // Refresh GSAP ScrollTrigger to recalculate positions now that scroll is unlocked
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      }, 1000);
    }
  }

})();

// PART 2 REFINEMENTS (GLOBAL POLISH)
document.addEventListener('DOMContentLoaded', () => {
  // Custom cursor logic removed to prevent double cursor with main.js

  // Scroll to Top
  const scrollTopBtn = document.getElementById('scroll-to-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) scrollTopBtn.classList.add('visible');
      else scrollTopBtn.classList.remove('visible');
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Depth Effect
  const chapterColors = { 'chapter-01': '#050505', 'chapter-02': '#080808', 'chapter-03': '#090806', 'chapter-04': '#080808', 'chapter-05': '#0A0A0A', 'footer': '#060606' };
  const depthObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id || entry.target.tagName.toLowerCase();
        if (chapterColors[id]) document.body.style.backgroundColor = chapterColors[id];
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('section[id^="chapter-"], footer').forEach(sec => depthObserver.observe(sec));

// Removed revealObserver to let GSAP handle animations properly
  // Dedicated observer for mask-reveal-container to prevent images from disappearing
  const maskObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.clipPath = 'inset(0 0 0 0)';
        entry.target.style.webkitClipPath = 'inset(0 0 0 0)';
        maskObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.mask-reveal-container').forEach(mask => maskObserver.observe(mask));

  // Chapter 03 Parallax
  const parallaxImages = document.querySelectorAll('.story-image-container img');
  window.addEventListener('scroll', () => {
    parallaxImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (window.innerHeight - rect.top) * -0.25;
        img.style.transform = `translateY(${offset}px)`;
      }
    });
  });

  // Stats Counter
  function countUp(el, target, duration = 1800) {
    if (!el) return;
    let start = null; const isFloat = !Number.isInteger(target);
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const val = (1 - Math.pow(1 - p, 3)) * target;
      el.textContent = isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        countUp(document.querySelector('[data-count="customers"]'), 10000);
        countUp(document.querySelector('[data-count="rating"]'), 4.9);
        countUp(document.querySelector('[data-count="countries"]'), 47);
        countUp(document.querySelector('[data-count="dispatch"]'), 24);
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.4 });
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) statsObs.observe(statsSection);

  // Cart Timer
  const cartTimerEl = document.getElementById('cart-timer-countdown');
  let cartTimerInterval;
  function startCartTimer() {
    if (!cartTimerEl) return;
    clearInterval(cartTimerInterval);
    let timeRemaining = 600;
    cartTimerInterval = setInterval(() => {
      if (timeRemaining <= 0) { clearInterval(cartTimerInterval); cartTimerEl.textContent = "00:00"; return; }
      timeRemaining--;
      cartTimerEl.textContent = `${Math.floor(timeRemaining / 60).toString().padStart(2, '0')}:${(timeRemaining % 60).toString().padStart(2, '0')}`;
    }, 1000);
  }
  const cartDrawer = document.getElementById('cart-drawer');
  if (cartDrawer) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          if (cartDrawer.classList.contains('open')) { document.body.classList.add('cart-open'); startCartTimer(); }
          else { document.body.classList.remove('cart-open'); clearInterval(cartTimerInterval); }
        }
      });
    });
    observer.observe(cartDrawer, { attributes: true });
  }
});
