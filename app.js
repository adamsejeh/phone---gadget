/* ==========================================================================
   M-ACCESSORIES & GADGETS - INTERACTIVE APPLICATION JAVASCRIPT
   Features: Gadget & Phone Catalog, 3D Parallax Tilt, Cart Drawer, Configurator,
             Quick View Modal, Toast Notifications & Confetti Checkout
   ========================================================================== */

// --- 1. Product & Gadget Catalog Data ---
const PRODUCTS = [
  {
    id: 'pb1',
    title: 'M-Pro 50,000mAh Power Bank Station',
    category: 'powerbanks',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.96,
    reviews: 642,
    image: 'assets/laptop_powerbank.png',
    tag: 'Heavy-Duty 🔋',
    tagClass: 'badge-cyan',
    desc: 'Ultimate 50,000mAh high-capacity power bank station with 100W USB-C PD fast charge for laptops, phones, and gadgets.',
    specs: ['50,000mAh Massive Capacity', '100W USB-C Power Delivery', 'Real-Time LCD Percentage Screen', 'Charges up to 4 Devices Simultaneously']
  },
  {
    id: 'pb2',
    title: 'M-MagSlim 10,000mAh Power Bank',
    category: 'powerbanks',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.82,
    reviews: 310,
    image: 'assets/magsafe_charger.png',
    tag: 'Magnetic Fast ⚡',
    tagClass: 'badge-amber',
    desc: 'Ultra-slim magnetic wireless power bank with digital battery indicator screen and 15W MagSafe output.',
    specs: ['10,000mAh Slim Battery', '15W MagSafe Wireless Output', 'Digital LED Battery Percentage', 'Premium Anodized Aluminum']
  },
  {
    id: 'pch1',
    title: 'M-Shield Leather Tech Organizer Pouch',
    category: 'pouches',
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.9,
    reviews: 245,
    image: 'assets/pouch.png',
    tag: 'Waterproof 👛',
    tagClass: 'badge-pink',
    desc: 'Luxury waterproof shockproof tech organizer carrying pouch bag for phone, power banks, cables, and earbuds.',
    specs: ['Waterproof Leather & Ballistic Nylon', 'Padded Shockproof Compartments', 'Elastic Cable & Adapter Loops', 'Compact Travel Size']
  },
  {
    id: 'pch2',
    title: 'M-Travel Armor Gear Bag Pouch',
    category: 'pouches',
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.85,
    reviews: 198,
    image: 'assets/phone_case.png',
    tag: 'Shockproof 🛡️',
    tagClass: 'badge-cyan',
    desc: 'Protective semi-rigid carrying sleeve pouch designed to safeguard portable power banks, chargers, and phone gear.',
    specs: ['EVA Hard-Shell Protection', 'Soft Microfiber Interior Lining', 'Durable Weatherproof Zipper', 'Includes Wrist Strap']
  },
  {
    id: 'p7',
    title: 'M-Aero 4K Folding Drone',
    category: 'gadgets',
    price: 349.99,
    originalPrice: 429.99,
    rating: 4.95,
    reviews: 512,
    image: 'assets/drone.png',
    tag: 'Cool Gadget 🛸',
    tagClass: 'badge-cyan',
    desc: 'Ultra-portable 4K HDR folding drone with obstacle avoidance, 35-minute flight time, active AI tracking, and status LED lights.',
    specs: ['4K 60fps HDR Video Camera', '3-Axis Mechanical Gimbal', '35 Min Flight Time per Battery', '10km HD Video Transmission']
  },
  {
    id: 'p8',
    title: 'M-Beam 4K Portable Laser Projector',
    category: 'gadgets',
    price: 299.99,
    originalPrice: 379.99,
    rating: 4.88,
    reviews: 389,
    image: 'assets/projector.png',
    tag: 'Cool Gadget 🎥',
    tagClass: 'badge-amber',
    desc: 'Compact cylinder 4K smart laser projector with auto-focus, Dolby Audio speakers, built-in battery, and Android TV OS.',
    specs: ['Native 4K HDR Resolution', '1200 ANSI Lumens Brightness', 'Auto Keystone & Focus Correction', 'Built-in 4-Hour Battery']
  },
  {
    id: 'p1',
    title: 'M-Titanium Ultra Smartphone',
    category: 'phone',
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 320,
    image: 'assets/hero_phone.png',
    tag: 'Flagship 2026',
    tagClass: 'badge-pink',
    desc: 'Top-tier smartphone featuring a 6.8-inch AMOLED display, Snapdragon Gen-5 chip, 200MP pro camera matrix, and 5000mAh battery.',
    specs: ['6.8" 144Hz AMOLED Display', 'Snapdragon 8 Gen-5 Chip', '200MP Triple Camera System', '5000mAh 120W Fast Charge']
  },
  {
    id: 'p2',
    title: 'M-Armor Carbon Fiber Case',
    category: 'cases',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 184,
    image: 'assets/phone_case.png',
    tag: 'Military Armor',
    tagClass: 'badge-cyan',
    desc: 'Real carbon fiber weave phone case with built-in MagSafe ring and raised camera bezel protection against drop impacts.',
    specs: ['Aramid Carbon Fiber Weave', 'Integrated MagSafe Ring', '15ft Military Drop Tested', 'Anti-Fingerprint Coating']
  },
  {
    id: 'p3',
    title: 'M-Pulse ANC Wireless Earbuds',
    category: 'audio',
    price: 149.99,
    originalPrice: 189.99,
    rating: 4.9,
    reviews: 412,
    image: 'assets/earbuds.png',
    tag: 'Hi-Fi Audio',
    tagClass: 'badge-amber',
    desc: 'True wireless earbuds with active noise cancellation up to -45dB, custom titanium drivers, and futuristic transparent LED case.',
    specs: ['Active Noise Cancellation', '38-Hour Battery Life with Case', 'IPX7 Water Resistance', 'Low-Latency Gaming Mode']
  },
  {
    id: 'p6',
    title: 'M-GaN Turbo 100W Wall Charger',
    category: 'charging',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 298,
    image: 'assets/gan_charger.png',
    tag: 'GaN III Tech',
    tagClass: 'badge-amber',
    desc: 'Compact Gallium Nitride 3-port wall charger capable of powering smartphones, laptops, and gadgets simultaneously.',
    specs: ['100W Max Output', '2x USB-C + 1x USB-A Ports', 'Includes 6ft Braided Cable', 'Over-Temperature Protection']
  }
];

// --- 2. State Management ---
let state = {
  cart: JSON.parse(localStorage.getItem('m_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('m_wishlist') || '[]'),
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  selectedBrand: 'apple',
  selectedStyle: 'cool-gadgets'
};

// --- 3. DOM Elements ---
const productsGrid = document.getElementById('products-grid-container');
const categoryTabs = document.getElementById('category-tabs-container');
const searchInput = document.getElementById('catalog-search-input');
const sortSelect = document.getElementById('catalog-sort-select');

// Cart Drawer
const cartBadge = document.getElementById('cart-badge');
const cartDrawerToggle = document.getElementById('cart-drawer-toggle');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawerPanel = document.getElementById('cart-drawer-panel');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsBody = document.getElementById('cart-items-body');
const cartCountTitle = document.getElementById('cart-count-title');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutSubmitBtn = document.getElementById('checkout-submit-btn');

// Quick View Modal
const quickViewModal = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductCategory = document.getElementById('modal-product-category');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductRating = document.getElementById('modal-product-rating');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalProductSpecs = document.getElementById('modal-product-specs');
const modalAddCartBtn = document.getElementById('modal-add-cart-btn');

// Configurator
const brandSelectGroup = document.getElementById('brand-select-group');
const styleSelectGroup = document.getElementById('style-select-group');
const runConfiguratorBtn = document.getElementById('run-configurator-btn');
const configuratorResultBox = document.getElementById('configurator-result-box');

// Toast Container
const toastContainer = document.getElementById('toast-container');

// --- 4. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setup3DTilt();
  setupScrollEffects();
  setupEventListeners();
  animateCounterOnScroll();
});

// --- 5. Catalog Rendering & Filtering ---
function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.desc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}

function renderProducts() {
  const products = getFilteredProducts();

  if (products.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">No gadgets or accessories found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or category filter.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = products.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="card-top-badges">
          <span class="badge ${product.tagClass}">${product.tag}</span>
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-wishlist="${product.id}" title="Add to Wishlist">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="product-img-container">
          <img src="${product.image}" alt="${product.title}" class="product-img">
          <div class="card-overlay-actions">
            <button class="quick-view-btn" data-quickview="${product.id}">👁️ Quick View</button>
          </div>
        </div>

        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-title">${product.title}</h3>
          
          <div class="rating-stars">
            ★ ★ ★ ★ ★ <span class="rating-count">(${product.rating} · ${product.reviews} reviews)</span>
          </div>

          <div class="product-bottom">
            <div class="product-price">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
            </div>
            <button class="add-cart-btn" data-addcart="${product.id}" title="Add to Cart">
              +
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  setupCardEvents();
  setup3DTilt();
}

// --- 6. Card Events & Quick View ---
function setupCardEvents() {
  document.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.wishlist;
      if (state.wishlist.includes(id)) {
        state.wishlist = state.wishlist.filter(item => item !== id);
        showToast('Removed from wishlist', 'info');
      } else {
        state.wishlist.push(id);
        showToast('Added to wishlist! ❤️', 'success');
      }
      localStorage.setItem('m_wishlist', JSON.stringify(state.wishlist));
      renderProducts();
    });
  });

  document.querySelectorAll('[data-addcart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.addcart;
      addToCart(id);
    });
  });

  document.querySelectorAll('[data-quickview]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.quickview;
      openQuickView(id);
    });
  });
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalProductImg.src = product.image;
  modalProductImg.alt = product.title;
  modalProductCategory.textContent = product.category.toUpperCase();
  modalProductTitle.textContent = product.title;
  modalProductRating.innerHTML = `★ ★ ★ ★ ★ <span style="color:var(--text-dim);">(${product.rating} · ${product.reviews} reviews)</span>`;
  modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
  modalProductDesc.textContent = product.desc;
  
  modalProductSpecs.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');

  modalAddCartBtn.onclick = () => {
    addToCart(product.id);
    closeQuickView();
  };

  quickViewModal.classList.add('active');
}

function closeQuickView() {
  quickViewModal.classList.remove('active');
}

// --- 7. Cart Drawer Management ---
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: productId, qty: qty });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${product.title} to cart! 🛒`, 'success');
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart', 'info');
}

function saveCart() {
  localStorage.setItem('m_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = totalCount;
  cartCountTitle.textContent = totalCount;

  if (state.cart.length === 0) {
    cartItemsBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your shopping cart is empty</h3>
        <p>Explore our smartphones, accessories, and gadgets to add them!</p>
      </div>
    `;
    cartSubtotal.textContent = '$0.00';
    cartTotalAmount.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  cartItemsBody.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.title}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-title">${p.title}</div>
          <div class="cart-item-price">$${p.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', 1)">+</button>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart('${p.id}')" title="Remove">🗑️</button>
      </div>
    `;
  }).join('');

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTotalAmount.textContent = `$${subtotal.toFixed(2)}`;
}

window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;

function openCartDrawer() {
  cartDrawerOverlay.classList.add('active');
  cartDrawerPanel.classList.add('active');
}

function closeCartDrawer() {
  cartDrawerOverlay.classList.remove('active');
  cartDrawerPanel.classList.remove('active');
}

// --- 8. Configurator Tool ---
function handleConfigurator() {
  const brandNames = { apple: 'Apple Ecosystem', samsung: 'Samsung Galaxy', google: 'Android Tech' };
  const styleMatches = {
    'cool-gadgets': ['p7', 'pb1'],
    protection: ['pch1', 'p2'],
    'fast-charge': ['pb1', 'pb2']
  };

  const matchIds = styleMatches[state.selectedStyle] || ['pb1', 'pch1'];
  const matchedProducts = PRODUCTS.filter(p => matchIds.includes(p.id));

  configuratorResultBox.innerHTML = `
    <div style="text-align: left; width: 100%;">
      <span class="badge badge-cyan" style="margin-bottom: 0.8rem;">Recommended for ${brandNames[state.selectedBrand]}</span>
      <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1rem;">Curated Gadget & Accessory Setup</h3>
      
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
        ${matchedProducts.map(p => `
          <div style="display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.04); padding: 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
            <img src="${p.image}" style="width: 50px; height: 50px; object-fit: contain;">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">${p.title}</div>
              <div style="color: var(--accent-cyan); font-weight: 700;">$${p.price.toFixed(2)}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <button class="btn btn-primary" id="add-bundle-cart-btn" style="width: 100%;">
        🛒 Add Recommended Bundle to Cart
      </button>
    </div>
  `;

  document.getElementById('add-bundle-cart-btn').onclick = () => {
    matchedProducts.forEach(p => addToCart(p.id, 1));
    showToast('Complete matching gadget bundle added to cart!', 'success');
  };
}

// --- 9. Interactive 3D Card Tilt Effect ---
function setup3DTilt() {
  const heroCard = document.getElementById('hero-tilt-card');
  if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      heroCard.style.transform = `perspective(1000px) rotateY(${x / 25}deg) rotateX(${-y / 25}deg) scale(1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
    });
  }

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(800px) rotateY(${x / 20}deg) rotateX(${-y / 20}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
    });
  });
}

// --- 10. Scroll & Sticky Header & Active Nav Spy ---
function setupScrollEffects() {
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavOnScroll();
  });

  setupScrollReveal();
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
}

function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// --- 11. Animated Stats Counter ---
function animateCounterOnScroll() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        let count = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          counter.textContent = count.toLocaleString() + (target > 50 ? '+' : '');
        }, 30);
      });
    }
  }, { threshold: 0.4 });

  observer.observe(statsSection);
}

// --- 12. Toast Notifications ---
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : 'ℹ️'}</span>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- 13. Event Listeners Setup ---
function setupEventListeners() {
  categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      categoryTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      state.activeCategory = e.target.dataset.category;
      renderProducts();
    }
  });

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderProducts();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  cartDrawerToggle.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);
  cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  closeModalBtn.addEventListener('click', closeQuickView);
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickView();
  });

  brandSelectGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('device-option-btn')) {
      brandSelectGroup.querySelectorAll('.device-option-btn').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      state.selectedBrand = e.target.dataset.brand;
    }
  });

  styleSelectGroup.addEventListener('click', (e) => {
    if (e.target.classList.contains('device-option-btn')) {
      styleSelectGroup.querySelectorAll('.device-option-btn').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      state.selectedStyle = e.target.dataset.style;
    }
  });

  runConfiguratorBtn.addEventListener('click', handleConfigurator);

  checkoutSubmitBtn.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your cart is empty!', 'info');
      return;
    }

    closeCartDrawer();
    showToast('🎉 Order Placed Successfully! Thank you for shopping with M-Accessories & Gadgets.', 'success');
    state.cart = [];
    saveCart();
    updateCartUI();
  });

  document.getElementById('newsletter-form').addEventListener('submit', () => {
    const email = document.getElementById('newsletter-email').value;
    if (email) {
      showToast('⚡ Subscribed! You will get 15% off your first gadget order.', 'success');
      document.getElementById('newsletter-email').value = '';
    }
  });
}
