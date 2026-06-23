/* ==========================================================================
   LUXURY STORE INTERACTIONS (Loro Piana × Apple × Aesop)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Page Load Progress Simulation
  const loaderBar = document.getElementById('page-loader');
  if (loaderBar) {
    loaderBar.style.width = '100%';
    setTimeout(() => {
      loaderBar.style.opacity = '0';
      setTimeout(() => {
        loaderBar.style.display = 'none';
      }, 300);
    }, 600);
  }

  // Detect Mobile / Touch Device (Disable Custom Cursor & Blob)
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  const body = document.body;

  // Catalog Database for Spotlight Search
  const catalogProducts = [
    { id: 'p1', name: 'Cashmere Mock Neck', price: 890, category: 'Knitwear', img: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop', variant: 'Charcoal Grey' },
    { id: 'p2', name: 'Sartorial Amber Oud', price: 195, category: 'Apothecary', img: 'assets/perfume_front.png', variant: '50ml Perfume' },
    { id: 'p3', name: 'Leather Weekend Duffle', price: 1450, category: 'Accessories', img: 'assets/bag_front.png', variant: 'Calfskin Brown' },
    { id: 'p4', name: 'Champagne Silk Robe', price: 980, category: 'Apparel', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop', variant: 'Champagne Gold' },
    { id: 'p5', name: 'Castagna Suede Loafers', price: 780, category: 'Footwear', img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop', variant: 'Castagna Brown' },
    { id: 'p6', name: 'Oatmeal Cashmere Blanket', price: 1250, category: 'Living', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', variant: 'Oatmeal Melange' },
    { id: 'p7', name: 'Aura Brass Candle', price: 110, category: 'Apothecary', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop', variant: 'Sandalwood & Fig' },
    { id: 'p8', name: 'Wool Pleated Trouser', price: 620, category: 'Apparel', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop', variant: 'Off-White Wool' }
  ];

  // Initialize Custom Cursor & Blob (Desktop only)
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let cursorDot = { x: mouse.x, y: mouse.y };
  let cursorRing = { x: mouse.x, y: mouse.y };
  let cursorBlob = { x: mouse.x, y: mouse.y };

  const dotEl = document.getElementById('cursor-dot');
  const ringEl = document.getElementById('cursor-ring');
  const blobEl = document.getElementById('cursor-blob');
  const displacementFilter = document.querySelector('#liquid-displacement feTurbulence');

  let seedVal = 1;

  if (!isTouchDevice && dotEl && ringEl && blobEl) {
    body.classList.add('has-custom-cursor');

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const updateCursor = () => {
      cursorDot.x = lerp(cursorDot.x, mouse.x, 0.4);
      cursorDot.y = lerp(cursorDot.y, mouse.y, 0.4);
      dotEl.style.transform = `translate3d(${cursorDot.x}px, ${cursorDot.y}px, 0)`;

      cursorRing.x = lerp(cursorRing.x, mouse.x, 0.15);
      cursorRing.y = lerp(cursorRing.y, mouse.y, 0.15);
      ringEl.style.transform = `translate3d(${cursorRing.x}px, ${cursorRing.y}px, 0)`;

      cursorBlob.x = lerp(cursorBlob.x, mouse.x, 0.08);
      cursorBlob.y = lerp(cursorBlob.y, mouse.y, 0.08);
      blobEl.style.transform = `translate3d(${cursorBlob.x}px, ${cursorBlob.y}px, 0)`;

      if (displacementFilter) {
        seedVal += 0.04;
        displacementFilter.setAttribute('seed', Math.floor(seedVal % 1000));
      }

      requestAnimationFrame(updateCursor);
    };
    requestAnimationFrame(updateCursor);

    blobEl.style.animation = 'blob-morph 12s infinite ease-in-out alternate';

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes blob-morph {
        0% { border-radius: 50% 50% 50% 50%; }
        25% { border-radius: 60% 40% 65% 35%; }
        50% { border-radius: 40% 60% 35% 65%; }
        75% { border-radius: 55% 45% 40% 60%; }
        100% { border-radius: 50% 50% 50% 50%; }
      }
    `;
    document.head.appendChild(styleSheet);

    document.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('select') || target.closest('.filter-tab') || target.closest('.qty-btn') || target.closest('.cart-item-remove')) {
        body.classList.add('cursor-hover-clickable');
      }
      if (target.closest('.interactive-image') || target.closest('img')) {
        body.classList.add('cursor-hover-image');
        blobEl.style.background = 'rgba(255, 255, 255, 0.08)';
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('select') || target.closest('.filter-tab') || target.closest('.qty-btn') || target.closest('.cart-item-remove')) {
        body.classList.remove('cursor-hover-clickable');
      }
      if (target.closest('.interactive-image') || target.closest('img')) {
        body.classList.remove('cursor-hover-image');
        updateBlobColorForChapter();
      }
    });
  }

  const updateBlobColorForChapter = () => {
    if (!blobEl) return;
    const activeChapterSection = document.querySelector('.chapter.active-chapter');
    if (activeChapterSection) {
      const depthColor = activeChapterSection.getAttribute('data-depth');
      if (depthColor === '#090909') {
        blobEl.style.background = 'rgba(200, 169, 110, 0.15)';
      } else {
        blobEl.style.background = 'rgba(200, 169, 110, 0.12)';
      }
    }
  };

  // ==========================================================================
  // 2. Magnetic Button Effects (Pure kinetic physics on hover)
  // ==========================================================================
  if (!isTouchDevice) {
    const initMagneticButtons = () => {
      const magneticTargets = document.querySelectorAll('.interactive-cta, .btn, .nav-action-btn, .nav-logo');
      
      magneticTargets.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0) scale(0.97)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate3d(0px, 0px, 0px)';
        });
      });
    };
    initMagneticButtons();
  }

  // ==========================================================================
  // 3. Intersection Observer: Scroll reveals & Heading reveals
  // ==========================================================================
  const heroSection = document.getElementById('chapter-01');
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add('active-chapter');
    }, 200);
  }

  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (entry.target.classList.contains('stats-bar-container')) {
          triggerStatsCountUp();
        }
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  scrollRevealElements.forEach(el => revealObserver.observe(el));

  const headingRevealElements = document.querySelectorAll('.heading-reveal-line');
  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        headingObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.8
  });

  headingRevealElements.forEach(heading => headingObserver.observe(heading));

  // ==========================================================================
  // 4. Chapter Depth Shift & Navigation Underline Progress
  // ==========================================================================
  const chapters = document.querySelectorAll('.chapter');
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollProgress = document.getElementById('scroll-depth-progress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.height = `${scrollPct}%`;
    }

    const headerNav = document.getElementById('main-nav');
    if (headerNav) {
      if (scrollTop > 60) {
        headerNav.classList.add('scrolled');
      } else {
        headerNav.classList.remove('scrolled');
      }
    }

    // Parallax story images
    const scrollSpeedMultiplier = 0.15;
    const storyImages = [
      { id: 'parallax-img-1', el: document.getElementById('parallax-img-1') },
      { id: 'parallax-img-2', el: document.getElementById('parallax-img-2') }
    ];

    storyImages.forEach(item => {
      if (item.el) {
        const rect = item.el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          const img = item.el.querySelector('img');
          if (img) {
            const offset = (window.innerHeight / 2 - rect.top) * scrollSpeedMultiplier;
            img.style.transform = `translate3d(0px, ${offset}px, 0px) scale(1.04)`;
          }
        }
      }
    });

    chapters.forEach(chapter => {
      const rect = chapter.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        if (!chapter.classList.contains('active-chapter')) {
          chapters.forEach(c => c.classList.remove('active-chapter'));
          chapter.classList.add('active-chapter');

          const newDepth = chapter.getAttribute('data-depth');
          if (newDepth) {
            body.style.backgroundColor = newDepth;
          }

          const currentId = chapter.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          updateBlobColorForChapter();
        }
      }
    });
  });

  // Smooth scroll links hook (Explores, Chapter clicks)
  document.querySelectorAll('.scroll-to-link, .nav-logo, .nav-links a, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ==========================================================================
  // 5. Products Filter Tabs & Grid Staggered Swap
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productsGrid = document.getElementById('products-grid-element');
  const productCards = document.querySelectorAll('.product-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;

      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      if (productsGrid) {
        productsGrid.classList.add('grid-crossfading');
        
        setTimeout(() => {
          productCards.forEach((card) => {
            const cardCats = card.getAttribute('data-categories').split(' ');
            if (filterVal === 'all' || cardCats.includes(filterVal)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });

          productsGrid.classList.remove('grid-crossfading');
        }, 250);
      }
    });
  });

  // ==========================================================================
  // 6. Stats Count-Up Animation
  // ==========================================================================
  let statsTriggered = false;

  const triggerStatsCountUp = () => {
    if (statsTriggered) return;
    statsTriggered = true;

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const decimals = parseInt(stat.getAttribute('data-decimals') || '0');
      let currentVal = 0;
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      const stepDuration = duration / steps;

      const counter = setInterval(() => {
        currentVal += increment;
        if (currentVal >= target) {
          clearInterval(counter);
          let finalStr = target.toFixed(decimals);
          if (stat.getAttribute('data-target').includes('+') || target === 10000) {
            finalStr = '10,000+';
          } else if (target === 40) {
            finalStr = '40+';
          } else if (target === 100) {
            finalStr = '100%';
          } else if (target === 24) {
            finalStr = '24hr';
          }
          stat.innerText = finalStr;
        } else {
          stat.innerText = currentVal.toFixed(decimals) + (decimals === 0 && target === 100 ? '%' : '');
        }
      }, stepDuration);
    });
  };

  // ==========================================================================
  // 7. Testimonials Autoplay & Hover Pause Slider
  // ==========================================================================
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialControlDots = document.querySelectorAll('.testimonial-control-dot');
  let activeSlideIndex = 0;
  let testimonialInterval;

  const showTestimonialSlide = (index) => {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    testimonialControlDots.forEach(dot => dot.classList.remove('active'));
    
    testimonialSlides[index].classList.add('active');
    testimonialControlDots[index].classList.add('active');
    activeSlideIndex = index;
  };

  const nextTestimonial = () => {
    let nextIndex = activeSlideIndex + 1;
    if (nextIndex >= testimonialSlides.length) {
      nextIndex = 0;
    }
    showTestimonialSlide(nextIndex);
  };

  const startTestimonialAutoplay = () => {
    testimonialInterval = setInterval(nextTestimonial, 6000);
  };

  const stopTestimonialAutoplay = () => {
    clearInterval(testimonialInterval);
  };

  testimonialControlDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showTestimonialSlide(index);
      stopTestimonialAutoplay();
      startTestimonialAutoplay();
    });
  });

  const testimonialWrapper = document.querySelector('.testimonials-wrapper');
  if (testimonialWrapper) {
    testimonialWrapper.addEventListener('mouseenter', stopTestimonialAutoplay);
    testimonialWrapper.addEventListener('mouseleave', startTestimonialAutoplay);
  }

  if (testimonialSlides.length > 0) {
    startTestimonialAutoplay();
  }

  // ==========================================================================
  // 8. Newsletter Email Form Submission
  // ==========================================================================
  const emailForm = document.getElementById('newsletter-email-form');
  const emailInput = document.getElementById('newsletter-email-input');
  const formSuccess = document.getElementById('newsletter-success-el');
  const spinner = document.getElementById('form-spinner');

  if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      emailInput.disabled = true;
      spinner.style.display = 'inline-block';

      setTimeout(() => {
        emailForm.style.opacity = '0';
        setTimeout(() => {
          emailForm.style.display = 'none';
          if (formSuccess) {
            formSuccess.classList.add('active');
          }
          createToast('Newsletter subscription activated ✓');
        }, 300);
      }, 1200);
    });
  }

  // ==========================================================================
  // 9. Wishlist Heart Pop Array Database
  // ==========================================================================
  let wishlist = [];
  try {
    const savedWishlist = localStorage.getItem('aethel_wishlist');
    if (savedWishlist) {
      wishlist = JSON.parse(savedWishlist);
    }
  } catch (e) {
    wishlist = [];
  }

  const updateWishlistUI = () => {
    const listContainer = document.getElementById('wishlist-items-list-container');
    const badge = document.getElementById('wishlist-badge-count');

    // Update Nav Badge
    if (badge) {
      badge.innerText = wishlist.length;
      if (wishlist.length > 0) {
        badge.classList.add('show');
      } else {
        badge.classList.remove('show');
      }
    }

    localStorage.setItem('aethel_wishlist', JSON.stringify(wishlist));

    if (wishlist.length === 0) {
      listContainer.innerHTML = `
        <div class="cart-empty-state" id="wishlist-empty-state-el">
          <p>Your wishlist is currently clear.</p>
          <a href="#chapter-02" class="text-link" id="wishlist-continue-shopping-btn-dynamic">Explore Curation <span>→</span></a>
        </div>
      `;
      const dynamicContinue = document.getElementById('wishlist-continue-shopping-btn-dynamic');
      if (dynamicContinue) {
        dynamicContinue.addEventListener('click', (e) => { e.preventDefault(); closeWishlist(); });
      }
      return;
    }

    let listHTML = '';
    wishlist.forEach(item => {
      listHTML += `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-row">
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-price">$${item.price.toLocaleString()}</span>
            </div>
            <span class="cart-item-variant">${item.variant}</span>
            <div class="cart-item-actions" style="margin-top: var(--space-xs);">
              <button class="btn btn-primary move-wishlist-to-cart-btn" data-id="${item.id}" style="padding: 8px 16px; font-size: 8px;">Move To Cart</button>
              <button class="cart-item-remove remove-wishlist-item" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = listHTML;

    // Connect inside wishlist actions
    const removeBtns = listContainer.querySelectorAll('.remove-wishlist-item');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        removeFromWishlist(id);
      });
    });

    const moveBtns = listContainer.querySelectorAll('.move-wishlist-to-cart-btn');
    moveBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = wishlist.find(p => p.id === id);
        if (item) {
          addToCart(item);
          removeFromWishlist(id);
          closeWishlist();
        }
      });
    });
  };

  const addToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      wishlist.push(product);
      updateWishlistUI();
      // Sync card classes
      const cardHeart = document.querySelector(`.product-card[data-id="${product.id}"] .wishlist-btn`);
      if (cardHeart) cardHeart.classList.add('active');
    }
  };

  const removeFromWishlist = (id) => {
    wishlist = wishlist.filter(item => item.id !== id);
    updateWishlistUI();
    // Sync card classes
    const cardHeart = document.querySelector(`.product-card[data-id="${id}"] .wishlist-btn`);
    if (cardHeart) cardHeart.classList.remove('active');
  };

  // Connect Card Hearts Click
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      if (card) {
        const id = card.getAttribute('data-id');
        const product = catalogProducts.find(p => p.id === id);
        
        btn.classList.add('wishlist-pop');
        setTimeout(() => btn.classList.remove('wishlist-pop'), 400);

        if (btn.classList.contains('active')) {
          removeFromWishlist(id);
          createToast('Removed from wishlist');
        } else {
          if (product) {
            addToWishlist(product);
            createToast('Saved to wishlist');
          }
        }
      }
    });
  });

  // Wishlist drawer controls
  const wishlistOverlay = document.getElementById('wishlist-overlay-element');
  const wishlistDrawer = document.getElementById('wishlist-drawer-element');
  const wishlistTrigger = document.getElementById('wishlist-trigger');
  const wishlistClose = document.getElementById('wishlist-close-btn');

  const openWishlist = () => {
    wishlistOverlay.classList.add('open');
    wishlistDrawer.classList.add('open');
    wishlistDrawer.setAttribute('aria-hidden', 'false');
    trapFocus(wishlistDrawer);
    document.body.style.overflow = 'hidden';
  };

  const closeWishlist = () => {
    wishlistOverlay.classList.remove('open');
    wishlistDrawer.classList.remove('open');
    wishlistDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  };

  if (wishlistTrigger) wishlistTrigger.addEventListener('click', openWishlist);
  if (wishlistClose) wishlistClose.addEventListener('click', closeWishlist);
  if (wishlistOverlay) wishlistOverlay.addEventListener('click', closeWishlist);

  // ==========================================================================
  // 10. Client Portal / Account Authentication Logic & Persistence
  // ==========================================================================
  const clientOverlay = document.getElementById('client-overlay-element');
  const clientDrawer = document.getElementById('client-portal-drawer');
  const clientTrigger = document.getElementById('account-trigger');
  const clientClose = document.getElementById('client-close-btn');

  const signInFormBlock = document.getElementById('client-signin-form-block');
  const profileDetailsBlock = document.getElementById('client-profile-details-block');
  const loginForm = document.getElementById('portal-login-form');
  const loginSpinner = document.getElementById('portal-login-spinner');
  const loggedInIndicator = document.getElementById('user-logged-in-indicator');
  const logoutBtn = document.getElementById('client-logout-trigger');

  let isLoggedIn = localStorage.getItem('aethel_client_logged_in') === 'true';
  let clientEmail = localStorage.getItem('aethel_client_email') || '';
  let clientSizing = localStorage.getItem('aethel_client_sizing') || 'Coat 48 / Shoe 42';

  const restoreUserSession = () => {
    if (isLoggedIn) {
      if (loggedInIndicator) loggedInIndicator.style.display = 'block';
      if (signInFormBlock) signInFormBlock.style.display = 'none';
      if (profileDetailsBlock) profileDetailsBlock.style.display = 'flex';
      
      const userHeader = document.getElementById('client-profile-name');
      if (userHeader && clientEmail) {
        const userPart = clientEmail.split('@')[0];
        userHeader.innerText = userPart.charAt(0).toUpperCase() + userPart.slice(1);
      }
      
      const sizeSpan = document.getElementById('client-saved-sizing-span');
      if (sizeSpan) {
        sizeSpan.innerText = clientSizing;
      }
    } else {
      if (loggedInIndicator) loggedInIndicator.style.display = 'none';
      if (signInFormBlock) signInFormBlock.style.display = 'flex';
      if (profileDetailsBlock) profileDetailsBlock.style.display = 'none';
    }
  };

  const openClientPortal = () => {
    if (clientOverlay && clientDrawer) {
      clientOverlay.classList.add('open');
      clientDrawer.classList.add('open');
      clientDrawer.setAttribute('aria-hidden', 'false');
      trapFocus(clientDrawer);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeClientPortal = () => {
    if (clientOverlay && clientDrawer) {
      clientOverlay.classList.remove('open');
      clientDrawer.classList.remove('open');
      clientDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = 'auto';
    }
  };

  if (clientTrigger) clientTrigger.addEventListener('click', openClientPortal);
  if (clientClose) clientClose.addEventListener('click', closeClientPortal);
  if (clientOverlay) clientOverlay.addEventListener('click', closeClientPortal);

  // Sign In submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('portal-email-input').value;
      const submitBtnText = loginForm.querySelector('button[type="submit"] span');
      
      if (submitBtnText) submitBtnText.style.opacity = '0.5';
      if (loginSpinner) loginSpinner.style.display = 'inline-block';

      setTimeout(() => {
        isLoggedIn = true;
        clientEmail = email;
        
        localStorage.setItem('aethel_client_logged_in', 'true');
        localStorage.setItem('aethel_client_email', email);
        localStorage.setItem('aethel_client_sizing', clientSizing);
        
        // Update Nav UI indicator
        if (loggedInIndicator) loggedInIndicator.style.display = 'block';

        // Update Drawer view
        if (signInFormBlock) signInFormBlock.style.display = 'none';
        if (profileDetailsBlock) profileDetailsBlock.style.display = 'flex';

        // Set username in template
        const userHeader = document.getElementById('client-profile-name');
        if (userHeader) {
          const userPart = email.split('@')[0];
          userHeader.innerText = userPart.charAt(0).toUpperCase() + userPart.slice(1);
        }
        
        const sizeSpan = document.getElementById('client-saved-sizing-span');
        if (sizeSpan) {
          sizeSpan.innerText = clientSizing;
        }

        if (submitBtnText) submitBtnText.style.opacity = '1';
        if (loginSpinner) loginSpinner.style.display = 'none';
        
        createToast('Successfully authenticated ✓');
        // Do NOT close client portal so user can inspect profile
      }, 1000);
    });
  }

  // Logout trigger
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      isLoggedIn = false;
      clientEmail = '';
      clientSizing = 'Coat 48 / Shoe 42';
      
      localStorage.removeItem('aethel_client_logged_in');
      localStorage.removeItem('aethel_client_email');
      localStorage.removeItem('aethel_client_sizing');
      
      if (loggedInIndicator) loggedInIndicator.style.display = 'none';

      // Reset fields
      if (loginForm) loginForm.reset();

      if (profileDetailsBlock) profileDetailsBlock.style.display = 'none';
      if (signInFormBlock) signInFormBlock.style.display = 'flex';

      createToast('Secure session logged out');
      closeClientPortal();
    });
  }

  // Account helper triggers
  const forgotBtn = document.getElementById('portal-forgot-password');
  if (forgotBtn) {
    forgotBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createToast('Bespoke reset link dispatched');
    });
  }
  const createAcctBtn = document.getElementById('portal-create-account');
  if (createAcctBtn) {
    createAcctBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createToast('Atelier registration request logged');
    });
  }

  // ==========================================================================
  // 10B. Sizing Advisor Dialogue Logic
  // ==========================================================================
  const sizeAdvisorBackdrop = document.getElementById('size-advisor-backdrop');
  const sizeAdvisorCloseBtn = document.getElementById('size-advisor-close-btn');
  const sizeAdvisorTriggerCol = document.getElementById('size-advisor-trigger-btn');
  const sizeAdvisorTriggerPortal = document.getElementById('portal-size-advisor-btn');
  const sizeAdvisorApplyBtn = document.getElementById('size-advisor-apply-btn');

  const heightSlider = document.getElementById('advisor-height-slider');
  const heightValText = document.getElementById('advisor-height-val');
  const weightSlider = document.getElementById('advisor-weight-slider');
  const weightValText = document.getElementById('advisor-weight-val');
  const sizeRecText = document.getElementById('advisor-size-recommendation');

  const calculateSize = (height, weight) => {
    let baseSize = 48; // Default IT 48
    if (weight < 55) baseSize = 44;
    else if (weight < 65) baseSize = 46;
    else if (weight < 75) baseSize = 48;
    else if (weight < 85) baseSize = 50;
    else if (weight < 95) baseSize = 52;
    else if (weight < 105) baseSize = 54;
    else baseSize = 56;

    if (height > 185 && baseSize < 56) baseSize += 2;
    if (height < 165 && baseSize > 44) baseSize -= 2;

    return `IT ${baseSize}`;
  };

  const openSizeAdvisor = (e) => {
    if (e) e.preventDefault();
    if (sizeAdvisorBackdrop) {
      sizeAdvisorBackdrop.style.display = 'flex';
      setTimeout(() => {
        sizeAdvisorBackdrop.classList.add('open');
      }, 50);
      document.body.style.overflow = 'hidden';
      updateAdvisorRecommendation();
    }
  };

  const closeSizeAdvisor = () => {
    if (sizeAdvisorBackdrop) {
      sizeAdvisorBackdrop.classList.remove('open');
      setTimeout(() => {
        sizeAdvisorBackdrop.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 400);
    }
  };

  const updateAdvisorRecommendation = () => {
    if (!heightSlider || !weightSlider || !sizeRecText) return;
    const h = parseInt(heightSlider.value);
    const w = parseInt(weightSlider.value);
    const recommended = calculateSize(h, w);
    sizeRecText.innerText = recommended;
  };

  if (sizeAdvisorTriggerCol) sizeAdvisorTriggerCol.addEventListener('click', openSizeAdvisor);
  if (sizeAdvisorTriggerPortal) sizeAdvisorTriggerPortal.addEventListener('click', openSizeAdvisor);
  if (sizeAdvisorCloseBtn) sizeAdvisorCloseBtn.addEventListener('click', closeSizeAdvisor);
  if (sizeAdvisorBackdrop) {
    sizeAdvisorBackdrop.addEventListener('click', (e) => {
      if (e.target === sizeAdvisorBackdrop) closeSizeAdvisor();
    });
  }

  if (heightSlider && heightValText) {
    heightSlider.addEventListener('input', () => {
      heightValText.innerText = `${heightSlider.value} cm`;
      updateAdvisorRecommendation();
    });
  }

  if (weightSlider && weightValText) {
    weightSlider.addEventListener('input', () => {
      weightValText.innerText = `${weightSlider.value} kg`;
      updateAdvisorRecommendation();
    });
  }

  if (sizeAdvisorApplyBtn) {
    sizeAdvisorApplyBtn.addEventListener('click', () => {
      const rec = sizeRecText ? sizeRecText.innerText : 'IT 48';
      clientSizing = `Coat ${rec} / Shoe 42`;
      localStorage.setItem('aethel_client_sizing', clientSizing);
      
      const sizeSpan = document.getElementById('client-saved-sizing-span');
      if (sizeSpan) sizeSpan.innerText = clientSizing;
      
      createToast(`Tailored sizing ${rec} applied to client profile ✓`);
      closeSizeAdvisor();
    });
  }

  restoreUserSession();

  // ==========================================================================
  // 11. Spotlight Search Overlay HUD Logic
  // ==========================================================================
  const searchOverlay = document.getElementById('search-overlay-element');
  const searchTriggerBtn = document.getElementById('search-trigger');
  const searchCloseBtn = document.getElementById('search-overlay-close-btn');
  const searchInput = document.getElementById('search-overlay-input-el');
  const searchResults = document.getElementById('search-results-list-el');

  const openSearchHUD = () => {
    searchOverlay.classList.add('open');
    searchOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput.focus();
    }, 150);
  };

  const closeSearchHUD = () => {
    searchOverlay.classList.remove('open');
    searchOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    searchInput.value = '';
    searchResults.innerHTML = `<p class="body-text" style="text-align: center; color: var(--text-hint);">Type at least 2 characters to filter the catalog...</p>`;
  };

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearchHUD);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchHUD);

  // Esc keyboard key binds to close HUD overlays
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchHUD();
      closeClientPortal();
      closeWishlist();
      closeCart();
    }
  });

  // Live filter query keyup
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      
      if (query.length < 2) {
        searchResults.innerHTML = `<p class="body-text" style="text-align: center; color: var(--text-hint);">Type at least 2 characters to filter the catalog...</p>`;
        return;
      }

      // Filter catalog products
      const matches = catalogProducts.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p class="body-text" style="text-align: center; color: var(--text-hint);">No matching bespoke items found in archive.</p>`;
        return;
      }

      let resultsHTML = '';
      matches.forEach(item => {
        resultsHTML += `
          <div class="spotlight-result-item" data-id="${item.id}">
            <div class="spotlight-result-img">
              <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="spotlight-result-info">
              <span class="spotlight-result-name">${item.name}</span>
              <span class="spotlight-result-cat">${item.category}</span>
            </div>
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="price-display" style="font-size: 16px;">$${item.price.toLocaleString()}</span>
              <span class="spotlight-result-action">View Piece →</span>
            </div>
          </div>
        `;
      });

      searchResults.innerHTML = resultsHTML;

      // Click event for items (scrolling/focusing)
      const resultItems = searchResults.querySelectorAll('.spotlight-result-item');
      resultItems.forEach(itemEl => {
        itemEl.addEventListener('click', () => {
          const targetId = itemEl.getAttribute('data-id');
          closeSearchHUD();

          // Scroll to product card smoothly
          const productCard = document.querySelector(`.product-card[data-id="${targetId}"]`);
          if (productCard) {
            const offsetTop = productCard.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });

            // Flash temporary gold border glow to direct user attention
            setTimeout(() => {
              productCard.style.boxShadow = '0 0 20px rgba(200, 169, 110, 0.6)';
              productCard.style.borderColor = 'var(--gold)';
              setTimeout(() => {
                productCard.style.boxShadow = '';
                productCard.style.borderColor = '';
              }, 1200);
            }, 600);
          }
        });
      });
    });
  }

  // ==========================================================================
  // 12. Cart Drawer & Checkout Success dialogue
  // ==========================================================================
  let cart = [];
  try {
    const savedCart = localStorage.getItem('aethel_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    } else {
      cart = [
        { id: 'p2', name: 'Sartorial Amber Oud', price: 195, qty: 1, variant: '50ml Perfume', img: 'assets/perfume_front.png' },
        { id: 'p3', name: 'Leather Weekend Duffle', price: 1450, variant: 'Calfskin Brown', img: 'assets/bag_front.png', qty: 1 }
      ];
    }
  } catch (e) {
    cart = [
      { id: 'p2', name: 'Sartorial Amber Oud', price: 195, qty: 1, variant: '50ml Perfume', img: 'assets/perfume_front.png' },
      { id: 'p3', name: 'Leather Weekend Duffle', price: 1450, variant: 'Calfskin Brown', img: 'assets/bag_front.png', qty: 1 }
    ];
  }

  const cartOverlay = document.getElementById('cart-overlay-element');
  const cartDrawer = document.getElementById('cart-drawer-element');
  const cartTrigger = document.getElementById('cart-trigger-btn');
  const cartClose = document.getElementById('cart-close-btn');
  const cartContinue = document.getElementById('cart-continue-shopping-btn');
  const cartBadge = document.getElementById('cart-badge-count');

  const checkoutBackdrop = document.getElementById('checkout-success-backdrop');
  const checkoutCloseBtn = document.getElementById('checkout-success-close-btn');

  const openCart = () => {
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    trapFocus(cartDrawer);
    document.body.style.overflow = 'hidden';
  };

  const closeCart = () => {
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  };

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartContinue) cartContinue.addEventListener('click', (e) => { e.preventDefault(); closeCart(); });

  const addToCart = (product) => {
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        qty: 1,
        variant: product.variant || 'Standard Custom',
        img: product.img
      });
    }
    
    updateCartUI();
    createToast(`${product.name} added to cart ✓`);
    openCart();
  };

  const updateCartUI = () => {
    const listContainer = document.getElementById('cart-items-list-container');
    const footerEl = document.getElementById('cart-footer-el');
    const subtotalEl = document.getElementById('cart-subtotal-price');

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    if (cartBadge) {
      cartBadge.innerText = totalQty;
      
      if (totalQty > 0) {
        cartBadge.classList.add('show');
      } else {
        cartBadge.classList.remove('show');
      }

      // Animate badge popup scale
      cartBadge.style.transform = 'translate(30%, -20%) scale(1.3)';
      setTimeout(() => {
        cartBadge.style.transform = 'translate(30%, -20%) scale(1)';
      }, 300);
    }

    const cartHeaderTitle = document.querySelector('.cart-header h3');
    if (cartHeaderTitle) {
      cartHeaderTitle.innerText = `Your Cart (${totalQty})`;
    }

    if (cart.length === 0) {
      listContainer.innerHTML = `
        <div class="cart-empty-state" id="cart-empty-state-el">
          <p>Your cart is empty.</p>
          <a href="#chapter-02" class="text-link" id="cart-continue-shopping-btn-dynamic">Continue Shopping <span>→</span></a>
        </div>
      `;
      footerEl.style.display = 'none';

      const dynamicContinue = document.getElementById('cart-continue-shopping-btn-dynamic');
      if (dynamicContinue) {
        dynamicContinue.addEventListener('click', (e) => { e.preventDefault(); closeCart(); });
      }
      return;
    }

    footerEl.style.display = 'flex';
    let subtotal = 0;
    let listHTML = '';

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      
      const monogramSupports = ['p3', 'p4', 'p6'];
      const supportsMonogram = monogramSupports.includes(item.id);
      let monogramHTML = '';
      
      if (supportsMonogram) {
        const initials = item.monogramInitials || '';
        const color = item.monogramColor || 'Gold';
        monogramHTML = `
          <div class="cart-item-monogram-section" style="border-top: 1px dashed var(--border); margin-top: var(--space-xs); padding-top: var(--space-xs); width: 100%;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 10px;">
              <span style="color: var(--text-secondary);">Complimentary Monogramming</span>
              <button class="toggle-monogram-edit-btn" data-id="${item.id}" style="font-size: 9px; border: none; background: none; text-decoration: underline; cursor: pointer; color: var(--gold); padding: 0;">
                ${initials ? 'Edit Initials' : '+ Add Initials'}
              </button>
            </div>
            ${initials ? `
              <div style="font-size: 10px; color: var(--gold); display: flex; gap: 8px; margin-top: 4px; font-family: monospace; text-transform: uppercase;">
                <span>Initials: "${initials}"</span>
                <span>·</span>
                <span>Thread: ${color}</span>
              </div>
            ` : ''}
            <div class="monogram-input-block" id="monogram-edit-${item.id}" style="display: none; flex-direction: column; gap: 6px; margin-top: 6px;">
              <div style="display: flex; gap: var(--space-xs); align-items: center;">
                <input type="text" maxlength="3" placeholder="Initials" class="monogram-initials-input" value="${initials}" data-id="${item.id}" style="background: none; border: 1px solid var(--border); color: var(--text-primary); font-size: 11px; padding: 4px 6px; width: 80px; text-transform: uppercase; font-family: monospace;">
                <select class="monogram-color-select" data-id="${item.id}" style="background: var(--bg-raised); border: 1px solid var(--border); color: var(--text-primary); font-size: 11px; padding: 4px 6px;">
                  <option value="Gold" ${color === 'Gold' ? 'selected' : ''}>Gold Thread</option>
                  <option value="Cream" ${color === 'Cream' ? 'selected' : ''}>Cream Thread</option>
                </select>
                <button class="btn btn-primary apply-monogram-btn" data-id="${item.id}" style="padding: 4px 8px; font-size: 8px; line-height: 1;">Apply</button>
              </div>
            </div>
          </div>
        `;
      }

      listHTML += `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="cart-item-details" style="width: 100%;">
            <div class="cart-item-row">
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-price">$${itemTotal.toLocaleString()}</span>
            </div>
            <span class="cart-item-variant">${item.variant}</span>
            <div class="cart-item-actions">
              <div class="qty-controls">
                <button class="qty-btn qty-dec" data-id="${item.id}" aria-label="Decrease Quantity">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn qty-inc" data-id="${item.id}" aria-label="Increase Quantity">+</button>
              </div>
              <button class="cart-item-remove" data-id="${item.id}">Remove</button>
            </div>
            ${monogramHTML}
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = listHTML;

    localStorage.setItem('aethel_cart', JSON.stringify(cart));

    // Connect monogramming toggles
    const toggleEditBtns = listContainer.querySelectorAll('.toggle-monogram-edit-btn');
    toggleEditBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const block = document.getElementById(`monogram-edit-${id}`);
        if (block) {
          if (block.style.display === 'none') {
            block.style.display = 'flex';
            const input = block.querySelector('.monogram-initials-input');
            if (input) input.focus();
          } else {
            block.style.display = 'none';
          }
        }
      });
    });

    const applyMonogramBtns = listContainer.querySelectorAll('.apply-monogram-btn');
    applyMonogramBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const block = document.getElementById(`monogram-edit-${id}`);
        if (block) {
          const input = block.querySelector('.monogram-initials-input');
          const select = block.querySelector('.monogram-color-select');
          const initials = input ? input.value.trim().toUpperCase() : '';
          const color = select ? select.value : 'Gold';
          
          const cartIndex = cart.findIndex(item => item.id === id);
          if (cartIndex > -1) {
            cart[cartIndex].monogramInitials = initials;
            cart[cartIndex].monogramColor = color;
            updateCartUI();
            if (initials) {
              createToast(`Complimentary monogram "${initials}" applied ✓`);
            } else {
              createToast(`Monogram cleared`);
            }
          }
        }
      });
    });
    if (subtotalEl) {
      subtotalEl.innerText = `$${subtotal.toLocaleString()}`;
    }

    const removeButtons = listContainer.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        cart = cart.filter(item => item.id !== id);
        updateCartUI();
        createToast('Item removed from cart');
      });
    });

    const decButtons = listContainer.querySelectorAll('.qty-dec');
    decButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const index = cart.findIndex(item => item.id === id);
        if (index > -1) {
          if (cart[index].qty > 1) {
            cart[index].qty -= 1;
          } else {
            cart = cart.filter(item => item.id !== id);
          }
          updateCartUI();
        }
      });
    });

    const incButtons = listContainer.querySelectorAll('.qty-inc');
    incButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const index = cart.findIndex(item => item.id === id);
        if (index > -1) {
          cart[index].qty += 1;
          updateCartUI();
        }
      });
    });

    updateWhatsAppLink(subtotal);
  };

  const updateWhatsAppLink = (subtotal) => {
    const waBtn = document.getElementById('cart-whatsapp-checkout-btn');
    if (!waBtn) return;

    let itemsStr = '';
    cart.forEach(item => {
      let monogramDetail = '';
      if (item.monogramInitials) {
        monogramDetail = ` (Monogram: ${item.monogramInitials} in ${item.monogramColor} thread)`;
      }
      itemsStr += `%0A-%20${item.qty}x%20${encodeURIComponent(item.name)}${encodeURIComponent(monogramDetail)}%20(${item.variant})%20-%20$${(item.price * item.qty).toLocaleString()}`;
    });

    const text = `Hello%20Aethel%2C%20I%27d%20like%20to%20order%20the%20following%20bespoke%20items:${itemsStr}%0A%0ASubtotal:%20$${subtotal.toLocaleString()}%0APlease%20confirm%20availability.`;
    waBtn.setAttribute('href', `https://wa.me/1234567890?text=${text}`);
  };

  // Checkout submit handler (success dialog trigger)
  const checkoutBtn = document.getElementById('cart-checkout-trigger');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      closeCart();

      // Show success popup window
      if (checkoutBackdrop) {
        // Random Order ID
        const randomId = 'AETH-' + Math.floor(1000 + Math.random() * 9000);
        const orderIdSpan = document.getElementById('checkout-order-id');
        if (orderIdSpan) orderIdSpan.innerText = randomId;

        checkoutBackdrop.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          checkoutBackdrop.classList.add('open');
        }, 50);
      }

      // Empty cart state
      cart = [];
      updateCartUI();
    });
  }

  // Close success dialog
  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', () => {
      if (checkoutBackdrop) {
        checkoutBackdrop.classList.remove('open');
        setTimeout(() => {
          checkoutBackdrop.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 400);
      }
    });
  }

  updateCartUI();

  // Focus trap
  const trapFocus = (element) => {
    const focusableEls = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');
    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];

    element.addEventListener('keydown', (e) => {
      const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
      if (!isTabPressed) return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    });

    if (focusableEls.length > 0 && firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 100);
    }
  };

  // ==========================================================================
  // 13. Toasts alerts system
  // ==========================================================================
  const toastContainer = document.getElementById('toast-alerts-container');

  const createToast = (message) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-alert';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toastContainer.removeChild(toast);
      }, 400);
    }, 3000);
  };

  // ==========================================================================
  // 14. Mobile Overlay Menu Toggle
  // ==========================================================================
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    
    const lines = menuToggle.querySelectorAll('.hamburger-line');
    if (isOpen) {
      lines[0].style.transform = 'translateY(5px) rotate(45deg)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'translateY(-6px) rotate(-45deg)';
      lines[0].style.backgroundColor = 'var(--gold)';
      lines[2].style.backgroundColor = 'var(--gold)';
    } else {
      lines[0].style.transform = 'translateY(0) rotate(0)';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'translateY(0) rotate(0)';
      lines[0].style.backgroundColor = 'var(--text-primary)';
      lines[2].style.backgroundColor = 'var(--text-primary)';
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  // ==========================================================================
  // 15. Scroll To Top Button
  // ==========================================================================
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 16. Connect Footer & Generic Modal Buttons
  // ==========================================================================
  const footerGarment = document.getElementById('footer-garment-care');
  if (footerGarment) footerGarment.addEventListener('click', (e) => { e.preventDefault(); createToast('Loro Piana garment care guidelines loaded'); });
  
  const footerShipping = document.getElementById('footer-shipping');
  if (footerShipping) footerShipping.addEventListener('click', (e) => { e.preventDefault(); createToast('Shipping: DHL express, free worldwide'); });
  
  const footerReturns = document.getElementById('footer-returns');
  if (footerReturns) footerReturns.addEventListener('click', (e) => { e.preventDefault(); createToast('30-day complimentary returns collection active'); });
  
  const footerConcierge = document.getElementById('footer-concierge');
  if (footerConcierge) footerConcierge.addEventListener('click', (e) => { e.preventDefault(); createToast('Concierge Chat active: +1 234 567 890'); });

  const footerMilan = document.getElementById('footer-milan');
  if (footerMilan) footerMilan.addEventListener('click', (e) => { e.preventDefault(); createToast('Milan Showroom fitting by invitation only'); });

  const footerJournal = document.getElementById('footer-journal');
  if (footerJournal) footerJournal.addEventListener('click', (e) => { e.preventDefault(); createToast('Journal Chapter 03 archived'); });

  const footerHeritage = document.getElementById('footer-heritage');
  if (footerHeritage) footerHeritage.addEventListener('click', (e) => { e.preventDefault(); createToast('Atelier history: Est. 2019'); });

  const footerSustain = document.getElementById('footer-sustain');
  if (footerSustain) footerSustain.addEventListener('click', (e) => { e.preventDefault(); createToast('100% sustainable materials report'); });

  const footerPrivacy = document.getElementById('footer-privacy');
  if (footerPrivacy) footerPrivacy.addEventListener('click', (e) => { e.preventDefault(); createToast('Compliant with GDPR & Client privacy pact'); });

  const footerTerms = document.getElementById('footer-terms');
  if (footerTerms) footerTerms.addEventListener('click', (e) => { e.preventDefault(); createToast('Bespoke sales agreements applied'); });

  const footerAccess = document.getElementById('footer-access');
  if (footerAccess) footerAccess.addEventListener('click', (e) => { e.preventDefault(); createToast('WCAG 2.1 AAA accessibility rules active'); });

  // ==========================================================================
  // 17. Materials Archive / Tactile Library Logic
  // ==========================================================================
  const materialsDatabase = {
    cashmere: {
      title: 'Mongolian Cashmere',
      origin: 'Origin: Alashan Plateau, Inner Mongolia',
      desc: 'Harvested exclusively during the spring molting season. The underfleece fibres measure an average of 15.5 microns in fineness, creating an unmatched weight-to-warmth ratio. Hand-sorted and washed in pure mountain water.',
      spec1: 'Optimal Warmth',
      spec2: '15.5 Microns',
      img: 'assets/story_craft.png'
    },
    leather: {
      title: 'Calfskin Leather',
      origin: 'Origin: Tuscany Atelier, Italy',
      desc: 'Full-grain calfskin leather, chrome-free and vegetable-tanned with natural tannins from chestnut bark. Develops a highly unique, soft patina over time. Water-resistant finishing with organic beeswax.',
      spec1: 'Generational Patina',
      spec2: 'Vegetable Tanned',
      img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop'
    },
    silk: {
      title: 'Mulberry Silk',
      origin: 'Origin: Lake Como Weavers, Italy',
      desc: 'Double-threaded mulberry silk loomed on historical mechanical looms. Exhibits an organic liquid luster that catches evening light beautifully. Hypoallergenic, temperature-regulating, and exceptionally fluid.',
      spec1: 'Liquid Luster',
      spec2: '6A Premium Grade',
      img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop'
    },
    oud: {
      title: 'Sartorial Oud',
      origin: 'Origin: Grasse Apothecary, France',
      desc: 'A bespoke fusion of wild Assamese oud wood, warm amber resin, and Italian bergamot. Distilled in copper vessels using traditional hydro-distillation methods, creating a rich, earthy, lingering signature scent.',
      spec1: '8-Hour Wear',
      spec2: 'Assam Wild Oud base',
      img: 'assets/perfume_front.png'
    }
  };

  const materialTabs = document.querySelectorAll('.material-tab-btn');
  const materialImg = document.getElementById('material-display-img');
  const materialTitle = document.getElementById('material-title');
  const materialOrigin = document.getElementById('material-origin');
  const materialDesc = document.getElementById('material-description');
  const materialSpec1 = document.getElementById('material-spec-1');
  const materialSpec2 = document.getElementById('material-spec-2');

  materialTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;

      materialTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const matKey = tab.getAttribute('data-material');
      const data = materialsDatabase[matKey];

      if (data) {
        const card = document.querySelector('.material-content-card');
        if (card) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          card.style.transition = 'opacity 250ms ease, transform 250ms ease';

          setTimeout(() => {
            if (materialImg) materialImg.setAttribute('src', data.img);
            if (materialTitle) materialTitle.innerText = data.title;
            if (materialOrigin) materialOrigin.innerText = data.origin;
            if (materialDesc) materialDesc.innerText = data.desc;
            if (materialSpec1) materialSpec1.innerText = data.spec1;
            if (materialSpec2) materialSpec2.innerText = data.spec2;

            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 250);
        }
      }
    });
  });

  // Restore wishlist card hearts styling on load
  const restoreWishlistHeartStyles = () => {
    wishlist.forEach(item => {
      const heartBtn = document.querySelector(`.product-card[data-id="${item.id}"] .wishlist-btn`);
      if (heartBtn) {
        heartBtn.classList.add('active');
      }
    });
  };
  restoreWishlistHeartStyles();

});
