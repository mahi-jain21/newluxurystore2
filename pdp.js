const PRODUCTS = {
  'p1': {
    name: 'Cashmere Mock Neck', category: 'Knitwear', price: '$890', priceOriginal: '', badge: 'New', rating: 4.8, reviewCount: 42, stock: 'in', stockText: 'In stock',
    shortDesc: 'A flawless fusion of classic silhouette and uncompromised Mongolian cashmere. Hand-finished seams deliver a seamless aesthetic.',
    longDesc: 'Knit in Milan using ultra-fine 15.5 micron cashmere. This mock neck is designed to offer maximum warmth with minimal weight, making it an essential layer for transitional weather.',
    details: ['100% Grade-A Mongolian Cashmere', '15.5 micron fineness', 'Hand-finished seamless construction', 'Made in Italy'],
    materials: [{label: 'Fabric', value: '100% Cashmere'}, {label: 'Origin', value: 'Milan, Italy'}, {label: 'Weight', value: '300 gsm'}],
    care: ['Dry clean only', 'Store folded'], shipping: 'Complimentary express shipping worldwide. Dispatched within 24 hours.',
    colours: [
      {name: 'Charcoal Grey', hex: '#333333', images: ['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop']},
      {name: 'Navy', hex: '#000080', images: ['https://dummyimage.com/600x800/000080/fff&text=Navy+Mock+Neck+(Coming+Soon)', 'https://dummyimage.com/600x800/000080/fff&text=Navy+Mock+Neck+(Coming+Soon)']},
      {name: 'Oatmeal', hex: '#D3C4B6', images: ['https://dummyimage.com/600x800/D3C4B6/000&text=Oatmeal+Mock+Neck+(Coming+Soon)', 'https://dummyimage.com/600x800/D3C4B6/000&text=Oatmeal+Mock+Neck+(Coming+Soon)']}
    ],
    sizes: ['S','M','L','XL'], unavailableSizes: [], materialImages: ['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'James H.', date: 'Dec 2024', rating: 5, verified: true, body: 'Perfect fit and incredibly soft.'}], ratingBreakdown: {5: 30, 4: 10, 3: 2, 2: 0, 1: 0}, related: ['p8', 'p9', 'p11']
  },
  'p2': {
    name: 'Sartorial Amber Oud', category: 'Apothecary', price: '$195', priceOriginal: '', badge: 'LAST 3', rating: 4.9, reviewCount: 110, stock: 'low', stockText: 'Only 3 left in stock',
    shortDesc: 'An intoxicating blend of aged oud and warm amber. Bottled in hand-blown glass.',
    longDesc: 'Developed over two years by master perfumers in Grasse. This scent opens with smoky wood notes and settles into a rich, lingering amber finish.',
    details: ['Top Notes: Bergamot, Pink Pepper', 'Heart: Agarwood (Oud), Cedar', 'Base: Amber, Vanilla', '50ml / 1.7 fl oz'],
    materials: [{label: 'Concentration', value: 'Eau de Parfum'}, {label: 'Bottle', value: 'Hand-blown glass'}, {label: 'Origin', value: 'Grasse, France'}],
    care: ['Store in a cool, dark place', 'Keep away from direct sunlight'], shipping: 'Ships securely wrapped. Dangerous goods shipping rules may apply to certain regions.',
    colours: [
      {name: 'Signature Gold', hex: '#C8A96E', images: ['assets/perfume_front.png', 'assets/perfume_back.png']}
    ],
    sizes: ['50ml', '100ml'], unavailableSizes: ['100ml'], materialImages: ['assets/perfume_front.png'],
    reviews: [{author: 'Sophia G.', date: 'Jan 2025', rating: 5, verified: true, body: 'The Amber Oud fragrance is subtle, sophisticated, and earthy. The bottle design is an art piece.'}], ratingBreakdown: {5: 95, 4: 10, 3: 5, 2: 0, 1: 0}, related: ['p7', 'p1', 'p3']
  },
  'p3': {
    name: 'Leather Weekend Duffle', monogrammable: true, category: 'Accessories', price: '$1,450', priceOriginal: '', badge: 'Bestseller', rating: 4.9, reviewCount: 230, stock: 'in', stockText: 'In stock',
    shortDesc: 'Full-grain Tuscan calfskin duffle. Built to accompany you for a lifetime.',
    longDesc: 'Hand-stitched in Florence using traditional leatherworking techniques. Features solid brass hardware, a spacious interior lined with durable canvas, and a padded shoulder strap.',
    details: ['Full-grain Italian calfskin', 'Solid brass hardware', 'Canvas lining', 'Dimensions: 50x25x30 cm'],
    materials: [{label: 'Exterior', value: '100% Calfskin'}, {label: 'Hardware', value: 'Solid Brass'}, {label: 'Origin', value: 'Florence, Italy'}],
    care: ['Wipe with a damp cloth', 'Condition leather every 6 months'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Cognac', hex: '#8B4513', images: ['assets/bag_front.png', 'assets/bag_back.png']},
      {name: 'Black', hex: '#000000', images: ['https://dummyimage.com/600x800/000000/fff&text=Black+Duffle+Bag+(Coming+Soon)', 'https://dummyimage.com/600x800/000000/fff&text=Black+Duffle+Bag+(Coming+Soon)']}
    ],
    sizes: ['One Size'], unavailableSizes: [], materialImages: ['assets/bag_front.png'],
    reviews: [{author: 'Marcus T.', date: 'Oct 2024', rating: 5, verified: true, body: 'Bespoke craftsmanship. The leather weekend bag is stunning, and the details are absolutely flawless.'}], ratingBreakdown: {5: 200, 4: 25, 3: 5, 2: 0, 1: 0}, related: ['p5', 'p12', 'p11']
  },
  'p4': {
    name: 'Champagne Silk Robe', category: 'Apparel', price: '$980', priceOriginal: '', badge: 'New', rating: 4.7, reviewCount: 18, stock: 'in', stockText: 'In stock',
    shortDesc: 'Pure Mulberry silk lounge robe in a radiant champagne hue. Fluid luxury.',
    longDesc: 'Drape yourself in 22 momme Mulberry silk. Features French seams, a tailored collar, and a self-tie waist belt. Designed for unparalleled comfort at home.',
    details: ['100% Mulberry Silk', '22 momme weight', 'French seams', 'Made in Italy'],
    materials: [{label: 'Fabric', value: '100% Silk'}, {label: 'Origin', value: 'Milan, Italy'}],
    care: ['Dry clean only', 'Iron on low heat'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Champagne Gold', hex: '#F7E7CE', images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['XS','S','M','L'], unavailableSizes: [], materialImages: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Elena R.', date: 'Feb 2025', rating: 5, verified: true, body: 'Absolutely gorgeous silk. Feels amazing on the skin.'}], ratingBreakdown: {5: 15, 4: 2, 3: 1, 2: 0, 1: 0}, related: ['p6', 'p7', 'p10']
  },
  'p5': {
    name: 'Castagna Suede Loafers', category: 'Footwear', price: '$780', priceOriginal: '', badge: 'New', rating: 4.8, reviewCount: 56, stock: 'in', stockText: 'In stock',
    shortDesc: 'Unstructured suede loafers crafted for effortless elegance.',
    longDesc: 'Made from supple Castagna brown suede. These loafers feature a lightweight leather sole and an unstructured design that molds to your foot over time.',
    details: ['100% Italian Suede', 'Leather sole', 'Unstructured fit', 'Made in Italy'],
    materials: [{label: 'Upper', value: '100% Suede'}, {label: 'Sole', value: '100% Leather'}],
    care: ['Use a suede brush gently', 'Keep away from water'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Castagna Brown', hex: '#5C4033', images: ['https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop']},
      {name: 'Navy', hex: '#000080', images: ['https://dummyimage.com/600x800/000080/fff&text=Navy+Loafers+(Coming+Soon)', 'https://dummyimage.com/600x800/000080/fff&text=Navy+Loafers+(Coming+Soon)']}
    ],
    sizes: ['40','41','42','43','44','45'], unavailableSizes: ['45'], materialImages: ['https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Thomas W.', date: 'Nov 2024', rating: 5, verified: true, body: 'Most comfortable loafers I own. Didn\'t even need to break them in.'}], ratingBreakdown: {5: 45, 4: 10, 3: 1, 2: 0, 1: 0}, related: ['p3', 'p8', 'p11']
  },
  'p6': {
    name: 'Oatmeal Cashmere Blanket', category: 'Living', price: '$1,250', priceOriginal: '', badge: 'Bestseller', rating: 5.0, reviewCount: 89, stock: 'in', stockText: 'In stock',
    shortDesc: 'A sprawling 4-ply cashmere blanket for unparalleled home comfort.',
    longDesc: 'Woven with four plies of our signature 15.5 micron cashmere. This blanket is generously sized and finished with delicate fringed edges.',
    details: ['100% Grade-A Cashmere', '4-ply thickness', 'Fringed edges', 'Dimensions: 200x150 cm'],
    materials: [{label: 'Fabric', value: '100% Cashmere'}, {label: 'Weight', value: '800 gsm'}],
    care: ['Dry clean only', 'Store folded'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Oatmeal Melange', hex: '#D3C4B6', images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['Standard'], unavailableSizes: [], materialImages: ['https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Claire M.', date: 'Dec 2024', rating: 5, verified: true, body: 'It is heavy but soft. The perfect blanket for winter evenings.'}], ratingBreakdown: {5: 89, 4: 0, 3: 0, 2: 0, 1: 0}, related: ['p4', 'p7', 'p1']
  },
  'p7': {
    name: 'Aura Brass Candle', category: 'Apothecary', price: '$110', priceOriginal: '', badge: 'Limited Run', rating: 4.6, reviewCount: 34, stock: 'low', stockText: 'Only 12 left in stock',
    shortDesc: 'Sandalwood and fig poured into a solid brass vessel.',
    longDesc: 'Hand-poured soy wax infused with essential oils of sandalwood, ripe fig, and a touch of vetiver. Housed in a reusable solid brass vessel that develops a unique patina over time.',
    details: ['Soy wax blend', 'Cotton wick', '60-hour burn time', 'Solid brass vessel'],
    materials: [{label: 'Wax', value: 'Soy Blend'}, {label: 'Vessel', value: 'Solid Brass'}],
    care: ['Trim wick to 1/4" before lighting', 'Do not burn for more than 4 hours at a time'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Brass', hex: '#B5A642', images: ['https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['300g'], unavailableSizes: [], materialImages: ['https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Lily B.', date: 'Jan 2025', rating: 5, verified: true, body: 'The scent fills the room beautifully. The brass vessel looks stunning on my coffee table.'}], ratingBreakdown: {5: 25, 4: 7, 3: 2, 2: 0, 1: 0}, related: ['p2', 'p6', 'p4']
  },
  'p8': {
    name: 'Wool Pleated Trouser', category: 'Apparel', price: '$620', priceOriginal: '$850', badge: 'Sold Out', rating: 4.9, reviewCount: 78, stock: 'out', stockText: 'Out of stock',
    shortDesc: 'High-waisted double-pleated trousers in fine Italian wool.',
    longDesc: 'Expertly tailored from super 130s Italian wool. Features a double pleat, extended waist tab, and a fluid drape that moves gracefully with every step.',
    details: ['100% Super 130s Wool', 'Double pleated front', 'Extended waist tab', 'Made in Italy'],
    materials: [{label: 'Fabric', value: '100% Wool'}, {label: 'Origin', value: 'Biella, Italy'}],
    care: ['Dry clean only', 'Press with cool iron'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Charcoal', hex: '#36454F', images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['46','48','50','52','54'], unavailableSizes: ['46','48','50','52','54'], materialImages: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'David L.', date: 'Oct 2024', rating: 5, verified: true, body: 'Impeccable tailoring. They drape perfectly.'}], ratingBreakdown: {5: 70, 4: 8, 3: 0, 2: 0, 1: 0}, related: ['p1', 'p5', 'p9']
  },
  'p9': {
    name: 'Vicuña Double Overcoat', category: 'Outerwear', price: '$4,890', priceOriginal: '', badge: 'Limited', rating: 5.0, reviewCount: 12, stock: 'low', stockText: 'Only 2 left in stock',
    shortDesc: 'The ultimate expression of luxury outerwear. Crafted from rare Vicuña wool.',
    longDesc: 'Vicuña is the rarest and finest natural fiber in the world, once reserved for Inca royalty. This double-breasted overcoat is a masterpiece of tailoring, offering unmatched warmth and a sublimely soft hand.',
    details: ['100% Pure Vicuña', 'Double-breasted', 'Horn buttons', 'Silk lining', 'Made in Italy'],
    materials: [{label: 'Exterior', value: '100% Vicuña'}, {label: 'Lining', value: '100% Silk'}, {label: 'Origin', value: 'Milan, Italy'}],
    care: ['Professional specialist dry clean only', 'Store in provided garment bag'], shipping: 'Complimentary white-glove delivery service worldwide.',
    colours: [
      {name: 'Camel Melange', hex: '#C19A6B', images: ['https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['48','50','52'], unavailableSizes: ['48'], materialImages: ['https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Arthur V.', date: 'Jan 2025', rating: 5, verified: true, body: 'A once-in-a-lifetime garment. The softness is indescribable.'}], ratingBreakdown: {5: 12, 4: 0, 3: 0, 2: 0, 1: 0}, related: ['p1', 'p8', 'p10']
  },
  'p10': {
    name: 'Viceroy Silk Scarf', category: 'Accessories', price: '$420', priceOriginal: '', badge: 'New', rating: 4.8, reviewCount: 45, stock: 'in', stockText: 'In stock',
    shortDesc: 'A rich silk twill scarf with hand-rolled edges.',
    longDesc: 'Printed in Como, Italy, this silk scarf features an exclusive archival paisley motif. Finished entirely by hand with plump, hand-rolled edges.',
    details: ['100% Silk Twill', 'Hand-rolled edges', 'Archival print', '90x90 cm', 'Made in Italy'],
    materials: [{label: 'Fabric', value: '100% Silk'}, {label: 'Origin', value: 'Como, Italy'}],
    care: ['Dry clean only', 'Store flat'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Midnight & Gold', hex: '#191970', images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['One Size'], unavailableSizes: [], materialImages: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Nina P.', date: 'Dec 2024', rating: 5, verified: true, body: 'Beautiful print and excellent weight to the silk.'}], ratingBreakdown: {5: 40, 4: 5, 3: 0, 2: 0, 1: 0}, related: ['p9', 'p3', 'p4']
  },
  'p11': {
    name: 'Suede Field Jacket', category: 'Outerwear', price: '$2,250', priceOriginal: '', badge: 'New', rating: 4.9, reviewCount: 62, stock: 'in', stockText: 'In stock',
    shortDesc: 'A luxurious take on the classic field jacket in unlined espresso suede.',
    longDesc: 'Cut from exceptionally soft, lightweight suede. Unlined for an unstructured, shirt-like feel that layers perfectly over knitwear or a simple tee.',
    details: ['100% Italian Suede', 'Four front pockets', 'Horn buttons', 'Unlined', 'Made in Italy'],
    materials: [{label: 'Exterior', value: '100% Suede'}, {label: 'Buttons', value: 'Horn'}, {label: 'Origin', value: 'Milan, Italy'}],
    care: ['Specialist leather dry clean only', 'Use a suede brush'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Espresso Suede', hex: '#4B3621', images: ['https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop']}
    ],
    sizes: ['46','48','50','52','54'], unavailableSizes: [], materialImages: ['https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Robert M.', date: 'Nov 2024', rating: 5, verified: true, body: 'The suede is unbelievably soft. A staple piece.'}], ratingBreakdown: {5: 58, 4: 4, 3: 0, 2: 0, 1: 0}, related: ['p1', 'p8', 'p3']
  },
  'p12': {
    name: 'Atelier Leather Slides', category: 'Footwear', price: '$680', priceOriginal: '$850', badge: 'Sale', rating: 4.7, reviewCount: 88, stock: 'low', stockText: 'Only 5 left in stock',
    shortDesc: 'Minimalist leather slides for refined summer living.',
    longDesc: 'Crafted from a single piece of Tuscan calfskin. Featuring a slightly padded leather footbed and a durable leather sole with rubber heel insert.',
    details: ['100% Tuscan Calfskin', 'Leather sole', 'Padded footbed', 'Made in Italy'],
    materials: [{label: 'Upper', value: '100% Calfskin'}, {label: 'Sole', value: 'Leather & Rubber'}],
    care: ['Wipe with a dry cloth', 'Store in provided dust bags'], shipping: 'Complimentary express shipping worldwide.',
    colours: [
      {name: 'Tuscan Tan', hex: '#D2B48C', images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop']},
      {name: 'Black', hex: '#000000', images: ['https://dummyimage.com/600x800/000000/fff&text=Black+Slides+(Coming+Soon)', 'https://dummyimage.com/600x800/000000/fff&text=Black+Slides+(Coming+Soon)']}
    ],
    sizes: ['40','41','42','43','44'], unavailableSizes: ['42','43'], materialImages: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'],
    reviews: [{author: 'Simon K.', date: 'Sep 2024', rating: 4, verified: true, body: 'Very elegant slides. Took a couple of wears to break in the leather strap.'}], ratingBreakdown: {5: 65, 4: 20, 3: 3, 2: 0, 1: 0}, related: ['p4', 'p3', 'p10']
  }
};

/* ── PANEL ENGINE ── */
(function () {
  const panel   = document.getElementById('pdp-panel');
  const overlay = document.getElementById('pdp-overlay');
  const closeBtn= document.getElementById('pdp-close');
  let currentQty = 1;
  let selectedColour = null;
  let selectedSize   = null;
  let currentProductId = null;

  /* RENDER IMAGES HELPER */
  function renderImages(imagesArray) {
    if (!imagesArray || imagesArray.length === 0) return;
    const primaryImg = document.getElementById('pdp-img-primary');
    
    primaryImg.style.opacity = '0';
    setTimeout(() => {
        primaryImg.src = imagesArray[0];
        primaryImg.style.opacity = '1';
    }, 200);

    const thumbsEl = document.getElementById('pdp-thumbs');
    thumbsEl.innerHTML = '';
    imagesArray.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'pdp-thumb' + (i === 0 ? ' active' : '');
      img.addEventListener('click', () => {
        primaryImg.style.opacity = '0';
        setTimeout(() => {
            primaryImg.src = src;
            primaryImg.style.opacity = '1';
        }, 200);
        thumbsEl.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
        img.classList.add('active');
      });
      thumbsEl.appendChild(img);
    });
  }

  /* OPEN */
  function openPanel(productId) {
    const p = PRODUCTS[productId];
    if (!p) return;
    
    currentProductId = productId;
    populate(p);

    requestAnimationFrame(() => {
      panel.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const children = panel.querySelectorAll('#pdp-right > *');
    children.forEach((el, i) => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity   = '';
          el.style.transform = '';
        });
      });
    });

    setTimeout(animateRatingBars, 600);

    setTimeout(() => {
      document.querySelectorAll('.review-card').forEach((c,i) => {
        setTimeout(() => c.classList.add('visible'), i * 80);
      });
    }, 700);
  }

  /* CLOSE */
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* POPULATE */
  function populate(p) {
    currentQty     = 1;
    selectedColour = p.colours[0].name;
    selectedSize   = null;

    document.getElementById('pdp-category').textContent = p.category;
    document.getElementById('pdp-name').textContent = p.name;
    document.getElementById('pdp-price').textContent = p.price;
    document.getElementById('pdp-price-original').textContent = p.priceOriginal || '';
    document.getElementById('pdp-short-desc').textContent = p.shortDesc;
    document.getElementById('pdp-long-desc').textContent = p.longDesc;
    document.getElementById('pdp-qty-value').textContent = '1';

    const badge = document.getElementById('pdp-img-badge');
    badge.textContent = p.badge || '';
    badge.style.display = p.badge ? 'block' : 'none';

    const dot  = document.getElementById('pdp-stock-dot');
    const text = document.getElementById('pdp-stock-text');
    dot.className  = `${p.stock}-stock`;
    text.textContent = p.stockText;

    const starsEl = document.getElementById('pdp-stars');
    starsEl.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const d = document.createElement('span');
      d.className = 'pdp-star-dot' + (i <= Math.round(p.rating) ? '' : ' empty');
      starsEl.appendChild(d);
    }
    document.getElementById('pdp-rating-num').textContent = `${p.rating} · ${p.reviewCount} reviews`;

    
      // Monogram Engine Reset
      const monogramBlock = document.getElementById('pdp-monogram-block');
      const monogramInputContainer = document.getElementById('pdp-monogram-input-container');
      const monogramToggle = document.getElementById('monogram-toggle-input');
      const monogramInput = document.getElementById('monogram-text');
      const monogramCanvas = document.getElementById('pdp-monogram-canvas');
      
      if (monogramBlock) {
        if (p.monogrammable) {
          monogramBlock.style.display = 'block';
          monogramToggle.checked = false;
          monogramInputContainer.style.display = 'none';
          monogramInput.value = '';
          if(monogramCanvas) {
             const ctx = monogramCanvas.getContext('2d');
             ctx.clearRect(0, 0, monogramCanvas.width, monogramCanvas.height);
             monogramCanvas.style.opacity = '0';
          }
        } else {
          monogramBlock.style.display = 'none';
        }
      }

      document.getElementById('pdp-img-primary').alt = p.name;
    renderImages(p.colours[0].images);

    const coloursEl = document.getElementById('pdp-colours');
    coloursEl.innerHTML = '';
    document.getElementById('pdp-colour-selected').textContent = p.colours[0].name;
    
    p.colours.forEach((c, i) => {
      const cDot = document.createElement('div');
      cDot.className  = 'colour-dot' + (i === 0 ? ' selected' : '');
      cDot.style.background = c.hex;
      cDot.title = c.name;
      cDot.addEventListener('click', () => {
        coloursEl.querySelectorAll('.colour-dot').forEach(d => d.classList.remove('selected'));
        cDot.classList.add('selected');
        selectedColour = c.name;
        document.getElementById('pdp-colour-selected').textContent = c.name;
        
        // Change image
        renderImages(c.images);
      });
      coloursEl.appendChild(cDot);
    });

    const sizesEl = document.getElementById('pdp-sizes');
    sizesEl.innerHTML = '';
    p.sizes.forEach(s => {
      const chip = document.createElement('div');
      chip.className = 'size-chip' + (p.unavailableSizes?.includes(s) ? ' unavailable' : '');
      chip.textContent = s;
      if (!p.unavailableSizes?.includes(s)) {
        chip.addEventListener('click', () => {
          sizesEl.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
          selectedSize = s;
        });
      }
      sizesEl.appendChild(chip);
    });

    const detailsList = document.getElementById('pdp-details-list');
    detailsList.innerHTML = '';
    p.details.forEach(d => {
      const li = document.createElement('li');
      li.textContent = d;
      detailsList.appendChild(li);
    });

    const matsEl = document.getElementById('pdp-materials-content');
    matsEl.innerHTML = '';
    p.materials.forEach(m => {
      const row = document.createElement('div');
      row.className = 'material-row';
      row.innerHTML = `<span class="material-row-label">${m.label}</span><span class="material-row-value">${m.value}</span>`;
      matsEl.appendChild(row);
    });

    const careList = document.getElementById('pdp-care-list');
    careList.innerHTML = '';
    p.care.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      careList.appendChild(li);
    });

    document.getElementById('pdp-shipping-content').textContent = p.shipping;

    const swatchesEl = document.getElementById('pdp-material-swatches');
    swatchesEl.innerHTML = '';
    p.materialImages?.forEach(src => {
      const s = document.createElement('div');
      s.className = 'material-swatch';
      const img = document.createElement('img');
      img.src = src; img.alt = 'Material';
      s.appendChild(img);
      swatchesEl.appendChild(s);
    });

    document.getElementById('pdp-reviews-avg').textContent = p.rating.toFixed(1);
    document.getElementById('pdp-reviews-count').textContent = `${p.reviewCount} reviews`;

    const bigStars = document.getElementById('pdp-reviews-stars-big');
    bigStars.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const d = document.createElement('span');
      d.className = 'pdp-star-dot' + (i <= Math.round(p.rating) ? '' : ' empty');
      bigStars.appendChild(d);
    }

    const barsEl = document.getElementById('pdp-rating-bars');
    barsEl.innerHTML = '';
    [5,4,3,2,1].forEach(star => {
      const pct = p.ratingBreakdown[star] || 0;
      const row = document.createElement('div');
      row.className = 'rating-bar-row';
      row.innerHTML = `<span class="rating-bar-label">${star}</span><div class="rating-bar-track"><div class="rating-bar-fill" data-pct="${pct/100}"></div></div><span class="rating-bar-pct">${pct}%</span>`;
      barsEl.appendChild(row);
    });

    const reviewsList = document.getElementById('pdp-reviews-list');
    reviewsList.innerHTML = '';
    p.reviews.forEach(r => {
      const card = document.createElement('div');
      card.className = 'review-card';
      const starsHtml = Array.from({length:5}, (_,i) => `<span class="pdp-star-dot${i < r.rating ? '' : ' empty'}"></span>`).join('');
      card.innerHTML = `
        <div class="review-card-top">
          <div>
            <div class="review-author">${r.author}</div>
            <div class="review-date">${r.date}</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <div style="display:flex;gap:3px">${starsHtml}</div>
            ${r.verified ? '<span class="review-verified">Verified</span>' : ''}
          </div>
        </div>
        <p class="review-body">${r.body}</p>`;
      reviewsList.appendChild(card);
    });
    
    const loadMoreBtn = document.getElementById('pdp-load-more-reviews');
    loadMoreBtn.textContent = 'Load more reviews';
    loadMoreBtn.style.opacity = '1';
    loadMoreBtn.style.cursor = 'pointer';
    loadMoreBtn.dataset.loading = '';
    
    const relatedEl = document.getElementById('pdp-related-grid');
    relatedEl.innerHTML = '';
    if(p.related) {
        p.related.forEach(relId => {
            const relP = PRODUCTS[relId];
            if(relP) {
                const rCard = document.createElement('div');
                rCard.className = 'related-card';
                rCard.innerHTML = `
                  <div class="related-card-img"><img src="${relP.colours[0].images[0]}" /></div>
                  <div class="related-card-name">${relP.name}</div>
                  <div class="related-card-price">${relP.price}</div>
                `;
                rCard.addEventListener('click', () => {
                    openPanel(relId);
                });
                relatedEl.appendChild(rCard);
            }
        });
    }
  }

  /* ADD TO CART INTEGRATION */
  document.getElementById('pdp-add-cart').addEventListener('click', () => {
      if (window.playLuxuryClick) window.playLuxuryClick();
      const btn = document.getElementById('pdp-add-cart');
      btn.classList.add('added');
      btn.querySelector('span').textContent = 'Added ✓';
      
      const originalCartBtn = document.querySelector(`.add-to-cart-btn[data-id="${currentProductId}"]`);
      if (originalCartBtn) {
          for (let i = 0; i < currentQty; i++) {
              originalCartBtn.click();
          }
      }
      
      setTimeout(() => {
        btn.classList.remove('added');
        btn.querySelector('span').textContent = 'Add to Cart';
      }, 2200);
    });

  /* LUXURY EVENT DELEGATION FOR ALL BUTTONS */
  document.body.addEventListener('click', function(e) {
      
      /* WISHLIST */
      const wishlistBtn = e.target.closest('#pdp-wishlist');
      if (wishlistBtn) {
          e.preventDefault();
          const isAdding = !wishlistBtn.classList.contains('active');
          wishlistBtn.classList.toggle('active');
          
          if (window.playLuxuryClick) window.playLuxuryClick();
          let toast = document.getElementById('lux-toast');
          if (!toast) {
              toast = document.createElement('div');
              toast.id = 'lux-toast';
              document.body.appendChild(toast);
          }
          toast.textContent = isAdding ? "Added to your Bespoke Wishlist" : "Removed from Wishlist";
          toast.classList.add('show');
          if (toast.timeoutId) clearTimeout(toast.timeoutId);
          toast.timeoutId = setTimeout(() => toast.classList.remove('show'), 3000);
          return;
      }

      /* WHATSAPP */
      const whatsappBtn = e.target.closest('#pdp-whatsapp');
      if (whatsappBtn) {
          e.preventDefault();
          const productName = document.getElementById('pdp-name').textContent;
          if (window.playLuxuryClick) window.playLuxuryClick();
          let toast = document.getElementById('lux-toast');
          if (!toast) {
              toast = document.createElement('div');
              toast.id = 'lux-toast';
              document.body.appendChild(toast);
          }
          toast.textContent = "Connecting to Private Concierge...";
          toast.classList.add('show');
          if (toast.timeoutId) clearTimeout(toast.timeoutId);
          toast.timeoutId = setTimeout(() => toast.classList.remove('show'), 3000);
          
          // actually open WhatsApp after a tiny delay for luxury feel
          setTimeout(() => {
              window.open('https://wa.me/1234567890?text=' + encodeURIComponent('I am interested in acquiring the ' + productName), '_blank');
          }, 800);
          return;
      }

      /* SIZE GUIDE */
      const sizeGuideBtn = e.target.closest('#pdp-size-guide');
      if (sizeGuideBtn) {
          e.preventDefault();
          const sizeModal = document.getElementById('lux-size-modal');
          if (sizeModal) {
              sizeModal.classList.add('active');
          }
          return;
      }

      /* SIZE GUIDE CLOSE */
      const sizeCloseBtn = e.target.closest('#lux-size-close');
      if (sizeCloseBtn) {
          e.preventDefault();
          const sizeModal = document.getElementById('lux-size-modal');
          if (sizeModal) sizeModal.classList.remove('active');
          return;
      }
      
      /* SIZE GUIDE OVERLAY CLICK */
      if (e.target.id === 'lux-size-modal') {
          e.target.classList.remove('active');
      }
      
      /* CLOSE PANEL */
      const closeBtnMatch = e.target.closest('#pdp-close');
      if (closeBtnMatch) {
          closePanel();
      }
  });

  overlay.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

  document.getElementById('pdp-qty-minus').addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        document.getElementById('pdp-qty-value').textContent = currentQty;
      }
  });
  document.getElementById('pdp-qty-plus').addEventListener('click', () => {
      if (currentQty < 10) {
        currentQty++;
        document.getElementById('pdp-qty-value').textContent = currentQty;
      }
  });

  document.querySelectorAll('.pdp-accord-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const accord = btn.closest('.pdp-accord');
        const isOpen = accord.dataset.open === 'true';
        document.querySelectorAll('.pdp-accord').forEach(a => delete a.dataset.open);
        if (!isOpen) accord.dataset.open = 'true';
      });
  });

  document.getElementById('pdp-reviews-link').addEventListener('click', () => {
      document.getElementById('pdp-reviews').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function animateRatingBars() {
    document.querySelectorAll('.rating-bar-fill').forEach(bar => {
        const pct = parseFloat(bar.dataset.pct);
        bar.style.transform = `scaleX(${pct})`;
        bar.classList.add('animate');
    });
  }

  document.getElementById('pdp-load-more-reviews').addEventListener('click', function() {
      const btn = this;
      if (btn.dataset.loading) return;
      btn.dataset.loading = "true";
      btn.textContent = "Authenticating reviews...";
      
      setTimeout(() => {
          btn.textContent = "No more reviews";
          btn.style.opacity = "0.5";
          btn.style.cursor = "not-allowed";
          
          const fakeReviews = [
              {author: 'Alexander W.', date: 'Just now', rating: 5, verified: true, body: 'Exceeded all my expectations. Worth every penny.'},
              {author: 'J. Smith', date: 'Yesterday', rating: 4, verified: true, body: 'Incredible material quality.'}
          ];
          
          const reviewsList = document.getElementById('pdp-reviews-list');
          fakeReviews.forEach((r, i) => {
              const card = document.createElement('div');
              card.className = 'review-card';
              const starsHtml = Array.from({length:5}, (_,idx) => `<span class="pdp-star-dot${idx < r.rating ? '' : ' empty'}"></span>`).join('');
              card.innerHTML = `
                <div class="review-card-top">
                  <div>
                    <div class="review-author">${r.author}</div>
                    <div class="review-date">${r.date}</div>
                  </div>
                  <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
                    <div style="display:flex;gap:3px">${starsHtml}</div>
                    ${r.verified ? '<span class="review-verified">Verified</span>' : ''}
                  </div>
                </div>
                <p class="review-body">${r.body}</p>`;
              reviewsList.appendChild(card);
              
              requestAnimationFrame(() => {
                  setTimeout(() => card.classList.add('visible'), 50 * i);
              });
          });
      }, 800);
  });

  document.querySelectorAll('.product-card').forEach(card => {
    const id = card.dataset.productId || card.dataset.id;
    if (!id) return;

    if (!card.querySelector('.view-details-btn')) {
      const btn = document.createElement('button');
      btn.className = 'view-details-btn';
      btn.innerHTML = 'View Details <span>→</span>';
      
      const wrap = card.querySelector('.product-image-container');
      if(wrap) {
        wrap.appendChild(btn);
      } else {
        card.appendChild(btn);
      }
    }

    card.querySelector('.view-details-btn').addEventListener('click', e => {
        e.stopPropagation();
        openPanel(id);
      });

    card.addEventListener('click', () => openPanel(id));
  });


    /* MONOGRAMMING ENGINE */
    const monogramToggle = document.getElementById('monogram-toggle-input');
    const monogramInputContainer = document.getElementById('pdp-monogram-input-container');
    const monogramInput = document.getElementById('monogram-text');
    const monogramCanvas = document.getElementById('pdp-monogram-canvas');

    function renderMonogram() {
        if (!monogramCanvas) return;
        const ctx = monogramCanvas.getContext('2d');
        const text = monogramInput.value.toUpperCase();
        
        // Sync canvas size to retina resolution for crisp text
        monogramCanvas.width = monogramCanvas.offsetWidth * window.devicePixelRatio;
        monogramCanvas.height = monogramCanvas.offsetHeight * window.devicePixelRatio;
        
        ctx.clearRect(0, 0, monogramCanvas.width, monogramCanvas.height);
        
        if (text.length > 0 && monogramToggle.checked) {
            monogramCanvas.style.opacity = '1';
            
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Dynamic sizing based on canvas width
            const fontSize = monogramCanvas.width * 0.08; 
            ctx.font = "300 " + fontSize + "px 'Cormorant Garamond', serif";
            
            // Gold Foil shadow
            ctx.shadowColor = 'rgba(0,0,0,0.6)';
            ctx.shadowOffsetX = 1;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 4;
            
            // Metallic Gradient
            const yPos = monogramCanvas.height * 0.85;
            const gradient = ctx.createLinearGradient(0, yPos - fontSize/2, 0, yPos + fontSize/2);
            gradient.addColorStop(0, '#F2EDE4'); // Ivory highlight
            gradient.addColorStop(0.3, '#C8A96E'); // Gold
            gradient.addColorStop(1, '#665330'); // Deep shadow
            
            ctx.fillStyle = gradient;
            
            // Fallback for letterSpacing (add thin space between letters)
            const spacedText = text.split('').join(String.fromCharCode(8202)); 
            
            ctx.fillText(spacedText, monogramCanvas.width / 2, yPos);
        } else {
            monogramCanvas.style.opacity = '0';
        }
    }

    if (monogramToggle) {
        monogramToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                monogramInputContainer.style.display = 'flex';
                monogramInput.focus();
                renderMonogram();
            } else {
                monogramInputContainer.style.display = 'none';
                monogramInput.value = '';
                renderMonogram();
            }
        });
    }

    if (monogramInput) {
        monogramInput.addEventListener('input', renderMonogram);
    }

})();
