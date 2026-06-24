document.addEventListener("DOMContentLoaded", () => {
  
  /* 1. CINEMATIC PRELOADER */
  const preloader = document.getElementById('lux-preloader');
  if (preloader) {
    // Hold for 1.5s, then hide
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1800);
  }

  /* 2. CUSTOM "LIQUID GOLD" CURSOR */
  const cursor = document.getElementById('lux-cursor');
  const follower = document.getElementById('lux-cursor-follower');
  
  if (cursor && follower && window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Move dot instantly
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    // Smooth follower loop
    function animateCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states for interactive elements
    const interactables = document.querySelectorAll('a, button, .product-card, .trust-item, .colour-dot, .size-chip');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('lux-hovering');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('lux-hovering');
      });
    });
  }

  /* 3. TOP SCROLL PROGRESS BAR */
  const scrollProgress = document.getElementById('lux-scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollRatio = scrollTotal / height;
      scrollProgress.style.transform = `scaleX(${scrollRatio})`;
    }, {passive: true});
  }

  /* 4. MAGNETIC BUTTONS */
  const magneticBtns = document.querySelectorAll('.hero-cta, .cta-btn, .quick-add-bar');
  magneticBtns.forEach(btn => {
    btn.classList.add('magnetic-btn');
    
    btn.addEventListener('mousemove', function(e) {
      if (window.innerWidth <= 768) return;
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Pull button towards mouse (20% strength)
      this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = `translate(0px, 0px)`;
    });
  });

});

  /* 5. CONCIERGE TOAST ALERTS */
  const luxBody = document.body;
  const toast = document.createElement('div');
  toast.id = 'lux-toast';
  luxBody.appendChild(toast);

  let toastTimeout;
  function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
          toast.classList.remove('show');
      }, 3000);
  }

  const conciergeBtns = document.querySelectorAll('.lux-concierge-btn');
  conciergeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const text = btn.textContent;
          showToast("Connecting to " + text + "...");
          
          // Close menu after click
          const menu = document.getElementById('lux-concierge-menu');
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
          setTimeout(() => {
              menu.style.opacity = '';
              menu.style.visibility = '';
          }, 500);
      });
  });



/* -- LUXURY SONIC BRANDING (Web Audio API) -- */
(function() {
    let audioCtx = null;
    let droneOsc = null;
    let droneGain = null;
    let audioEnabled = false;
    let userHasInteracted = false;

    function initAudio() {
        if (audioCtx) return;
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Setup drone
        droneOsc = audioCtx.createOscillator();
        droneGain = audioCtx.createGain();
        
        droneOsc.type = 'sine';
        droneOsc.frequency.setValueAtTime(65.41, audioCtx.currentTime); // C2 low drone
        
        droneGain.gain.setValueAtTime(0, audioCtx.currentTime);
        
        droneOsc.connect(droneGain);
        droneGain.connect(audioCtx.destination);
        
        droneOsc.start();
    }

    function toggleAudio() {
        if (!audioCtx) initAudio();
        audioEnabled = !audioEnabled;
        const iconOn = document.getElementById('audio-icon-on');
        const iconOff = document.getElementById('audio-icon-off');
        
        if (audioEnabled) {
            if(iconOn) iconOn.style.opacity = '1';
            if(iconOff) iconOff.style.opacity = '0';
            
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            // Fade in drone
            droneGain.gain.cancelScheduledValues(audioCtx.currentTime);
            droneGain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 2.0);
        } else {
            if(iconOn) iconOn.style.opacity = '0';
            if(iconOff) iconOff.style.opacity = '1';
            
            // Fade out drone
            droneGain.gain.cancelScheduledValues(audioCtx.currentTime);
            droneGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.0);
        }
    }

    // Expose global click sound function for buttons
    window.playLuxuryClick = function() {
        if (!userHasInteracted) {
            startAudioEngine();
        }
        if (audioEnabled && audioCtx) {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            // Crystal click: high freq with rapid exponential decay
            osc.frequency.setValueAtTime(2500, audioCtx.currentTime);
            
            gain.gain.setValueAtTime(1.0, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.1);
        }
    };

    const startAudioEngine = () => {
        if (userHasInteracted) return;
        userHasInteracted = true;
        initAudio();
        audioEnabled = false;
        toggleAudio(); 
        
        document.removeEventListener('click', startAudioEngine);
        document.removeEventListener('keydown', startAudioEngine);
    };
    
    const toggleBtn = document.getElementById('audio-toggle-btn');
    if (toggleBtn) {
        const iconOn = document.getElementById('audio-icon-on');
        if(iconOn) iconOn.style.opacity = '0';
        const iconOff = document.getElementById('audio-icon-off');
        if(iconOff) iconOff.style.opacity = '1';

        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!userHasInteracted) {
                initAudio();
                userHasInteracted = true;
                audioEnabled = false;
                toggleAudio(); // turns on
            } else {
                toggleAudio(); // toggles normally
            }
        });
    }

    document.addEventListener('click', startAudioEngine, {once: true});
})();





/* -- PHASE 4: CINEMATIC STORYTELLING SCROLL -- */
document.addEventListener("DOMContentLoaded", () => {
    // Select the target headings and pullquotes in Chapter 03
    const targets = document.querySelectorAll('#chapter-03 .craft-pullquote, #chapter-03 .section-heading, #chapter-03 #material-title');
    
    // Split text into wrapped characters
    targets.forEach(target => {
        // Only run once per element
        if (target.dataset.split) return;
        target.dataset.split = "true";
        
        const words = target.textContent.trim().split(/(\s+)/);
        target.innerHTML = ''; // clear
        
        words.forEach(word => {
            if (word.trim() === '') {
                target.appendChild(document.createTextNode(' '));
            } else {
                const wordWrap = document.createElement('span');
                wordWrap.style.display = 'inline-block';
                wordWrap.style.whiteSpace = 'nowrap';
                
                word.split('').forEach(char => {
                    const charWrap = document.createElement('span');
                    charWrap.className = 'char-wrap';
                    const charInner = document.createElement('span');
                    charInner.className = 'char-inner';
                    charInner.textContent = char;
                    charWrap.appendChild(charInner);
                    wordWrap.appendChild(charWrap);
                });
                target.appendChild(wordWrap);
            }
        });
    });

    // Intersection Observer to trigger reveals
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chars = entry.target.querySelectorAll('.char-inner');
                chars.forEach((char, index) => {
                    // Stagger the delay slightly for each character
                    char.style.transitionDelay = (index * 0.02) + 's';
                    // Trigger reflow then add revealed class
                    requestAnimationFrame(() => {
                        char.classList.add('revealed');
                    });
                });
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    targets.forEach(target => observer.observe(target));
});


/* -- PHASE 5: VIP CONCIERGE WIDGET LOGIC -- */
document.addEventListener("DOMContentLoaded", () => {
    const concierge = document.getElementById('lux-concierge');
    const conciergeIcon = document.getElementById('lux-concierge-icon');
    
    if (concierge && conciergeIcon) {
        conciergeIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            concierge.classList.toggle('open');
            if (window.playLuxuryClick) window.playLuxuryClick();
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (concierge.classList.contains('open') && !concierge.contains(e.target)) {
                concierge.classList.remove('open');
            }
        });
    }
    
    /* PHASE 6: CUSTOM CURSOR HOVER EFFECTS FOR LINKS */
    const customCursor = document.getElementById('lux-cursor');
    const customCursorFollower = document.getElementById('lux-cursor-follower');
    if (customCursor && customCursorFollower) {
        const interactiveElements = document.querySelectorAll('a, button, input, .product-card, .collection-card, .colour-dot, .size-chip');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.style.transform = 'scale(1.5)';
                customCursor.style.backgroundColor = 'transparent';
                customCursor.style.border = '1px solid var(--gold)';
                customCursorFollower.style.transform = 'scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                customCursor.style.transform = 'scale(1)';
                customCursor.style.backgroundColor = 'var(--gold)';
                customCursor.style.border = 'none';
                customCursorFollower.style.transform = 'scale(1)';
            });
        });
    }
});
