/**
 * Trek Explorers India - Main JavaScript
 * Handles all dynamic functionality for the trekking website
 */

// =====================================================
// DATA MANAGEMENT
// =====================================================

let treksData = { treks: [], categories: [], locations: [] };
let userTreks = [];

// Load trek data - uses embedded data from data.js (for local file access) or fetch (for server)
async function loadTrekData() {
  // First try to use embedded data (works with file:// protocol)
  if (typeof TREK_DATA !== 'undefined') {
    treksData = TREK_DATA;
    console.log('Trek data loaded from embedded data:', treksData.treks.length, 'treks');
    return treksData;
  }

  // Fallback to fetch for server environments
  try {
    const response = await fetch('data/treks.json');
    if (!response.ok) throw new Error('Failed to load trek data');
    treksData = await response.json();
    console.log('Trek data loaded from fetch:', treksData.treks.length, 'treks');
    return treksData;
  } catch (error) {
    console.error('Error loading trek data:', error);
    return null;
  }
}

// Load user-created treks from localStorage
function loadUserTreks() {
  const stored = localStorage.getItem('userTreks');
  if (stored) {
    userTreks = JSON.parse(stored);
  }
  return userTreks;
}

// Save user trek to localStorage
function saveUserTrek(trek) {
  userTreks.push(trek);
  localStorage.setItem('userTreks', JSON.stringify(userTreks));
  return trek;
}

// =====================================================
// UI COMPONENTS
// =====================================================

// Create a trek card HTML
function createTrekCard(trek) {
  const discount = Math.round((1 - trek.price / trek.originalPrice) * 100);
  const tags = trek.tags || [];

  return `
    <article class="trek-card" data-trek-id="${trek.id}" data-category="${trek.category}">
      <a href="trek-detail.html?id=${trek.id}">
        <div class="trek-card-image">
          <img src="${trek.thumbnail}" alt="${trek.name}" loading="lazy">
          <div class="trek-card-badges">
            ${tags.slice(0, 2).map(tag => {
    let badgeClass = '';
    if (tag.toLowerCase().includes('best seller')) badgeClass = 'bestseller';
    else if (tag.toLowerCase().includes('trending')) badgeClass = 'trending';
    return `<span class="trek-badge ${badgeClass}">${tag}</span>`;
  }).join('')}
          </div>
          <div class="trek-card-duration">${trek.duration.days}D | ${trek.duration.nights}N</div>
        </div>
        <div class="trek-card-content">
          <div class="trek-card-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>${trek.location}</span>
          </div>
          <h3 class="trek-card-title">${trek.name}</h3>
          <div class="trek-card-difficulty" style="border-color: ${trek.difficultyColor}; color: ${trek.difficultyColor}">
            <span style="width: 8px; height: 8px; background: ${trek.difficultyColor}; border-radius: 50%;"></span>
            ${trek.difficulty}
          </div>
          <div class="trek-card-footer">
            <div class="trek-card-price">
              <span class="trek-card-price-current">${trek.currency}${trek.price.toLocaleString()}</span>
              <span class="trek-card-price-original">${trek.currency}${trek.originalPrice.toLocaleString()}</span>
            </div>
            <div class="trek-card-rating">
              <span class="trek-card-rating-star">★</span>
              <span>${trek.rating}</span>
              <span style="color: var(--color-text-muted);">(${trek.reviews})</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  `;
}

// Create a category card HTML
function createCategoryCard(category, count) {
  return `
    <a href="treks.html?category=${category.id}" class="category-card">
      <div class="category-icon">${category.icon}</div>
      <h3 class="category-title">${category.name}</h3>
      <p class="category-count">${count} treks available</p>
    </a>
  `;
}

// Create community trek card
function createCommunityTrekCard(trek) {
  return `
    <article class="trek-card community-trek" data-trek-id="${trek.id}">
      <div class="trek-card-image">
        <img src="${trek.image || 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400'}" 
             alt="${trek.name}" loading="lazy">
        <div class="trek-card-badges">
          <span class="trek-badge">Community</span>
        </div>
        <div class="trek-card-duration">${trek.duration.days}D | ${trek.duration.nights}N</div>
      </div>
      <div class="trek-card-content">
        <div class="trek-card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${trek.location}</span>
        </div>
        <h3 class="trek-card-title">${trek.name}</h3>
        <div class="trek-card-difficulty" style="border-color: ${getDifficultyColor(trek.difficulty)}; color: ${getDifficultyColor(trek.difficulty)}">
          ${trek.difficulty}
        </div>
        <div style="margin-bottom: var(--space-md); font-size: var(--text-sm); color: var(--color-text-secondary);">
          <strong>Date:</strong> ${formatDate(trek.date)}<br>
          <strong>Organizer:</strong> ${trek.organizer}<br>
          <strong>Spots:</strong> ${trek.spotsLeft}/${trek.groupSize} left
        </div>
        <div class="trek-card-footer">
          <div class="trek-card-price">
            <span class="trek-card-price-current">₹${trek.price.toLocaleString()}</span>
            <span style="font-size: var(--text-xs); color: var(--color-text-muted);">per person</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="joinTrek('${trek.id}')">Join Trek</button>
        </div>
      </div>
    </article>
  `;
}

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getDifficultyColor(difficulty) {
  const colors = {
    'Easy': '#22c55e',
    'Easy-Moderate': '#84cc16',
    'Moderate': '#f59e0b',
    'Difficult': '#ef4444',
    'Extreme': '#dc2626'
  };
  return colors[difficulty] || '#f59e0b';
}

function formatDate(dateString) {
  if (!dateString) return 'TBD';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function generateId() {
  return 'trek_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Filter treks based on search and category
function filterTreks(treks, searchQuery = '', category = 'all') {
  return treks.filter(trek => {
    const matchesSearch = !searchQuery ||
      trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trek.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trek.difficulty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = category === 'all' || trek.category === category;

    return matchesSearch && matchesCategory;
  });
}

// =====================================================
// PAGE INITIALIZATION
// =====================================================

// Initialize homepage
async function initHomePage() {
  const data = await loadTrekData();
  if (!data) return;

  // Render featured treks (first 6)
  const trekGrid = document.getElementById('trekGrid');
  if (trekGrid) {
    const featuredTreks = data.treks.slice(0, 6);
    trekGrid.innerHTML = featuredTreks.map(createTrekCard).join('');
  }

  // Render categories
  const categoryGrid = document.getElementById('categoryGrid');
  if (categoryGrid) {
    const categoryCards = data.categories.map(cat => {
      const count = data.treks.filter(t => t.category === cat.id).length;
      return createCategoryCard(cat, count);
    });
    categoryGrid.innerHTML = categoryCards.join('');
  }

  // Setup search and filters
  setupSearchAndFilters();
}

// Initialize treks listing page
async function initTreksPage() {
  const data = await loadTrekData();
  if (!data) return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';

  renderTreks(data.treks, initialCategory);
  setupSearchAndFilters();

  // Set active filter based on URL
  document.querySelectorAll('.filter-tag').forEach(tag => {
    if (tag.dataset.filter === initialCategory) {
      tag.classList.add('active');
    } else if (initialCategory === 'all' && tag.dataset.filter === 'all') {
      tag.classList.add('active');
    } else {
      tag.classList.remove('active');
    }
  });
}

// Initialize trek detail page
async function initTrekDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const trekId = urlParams.get('id');

  if (!trekId) {
    window.location.href = 'treks.html';
    return;
  }

  const data = await loadTrekData();
  if (!data) return;

  const trek = data.treks.find(t => t.id === trekId);
  if (!trek) {
    console.error('Trek not found:', trekId);
    window.location.href = 'treks.html';
    return;
  }

  renderTrekDetail(trek);

  // Render similar treks
  const similarTreks = data.treks
    .filter(t => t.id !== trekId && (t.location === trek.location || t.category === trek.category))
    .slice(0, 3);

  const similarGrid = document.getElementById('similarTreks');
  if (similarGrid && similarTreks.length > 0) {
    similarGrid.innerHTML = similarTreks.map(createTrekCard).join('');
  }
}

// Initialize community treks page
function initCommunityTreksPage() {
  loadUserTreks();
  renderCommunityTreks();
}

// Initialize create trek page
function initCreateTrekPage() {
  setupCreateTrekForm();
}

// =====================================================
// RENDERING FUNCTIONS
// =====================================================

function renderTreks(treks, category = 'all') {
  const trekGrid = document.getElementById('trekGrid');
  if (!trekGrid) return;

  const filteredTreks = filterTreks(treks, '', category);

  if (filteredTreks.length === 0) {
    trekGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: var(--space-4xl);">
        <h3>No treks found</h3>
        <p style="color: var(--color-text-muted);">Try adjusting your filters or search query</p>
      </div>
    `;
  } else {
    trekGrid.innerHTML = filteredTreks.map(createTrekCard).join('');
  }
}

function renderTrekDetail(trek) {
  // Update page title
  document.title = `${trek.name} | Trek Explorers India`;

  // Hero section
  const heroImage = document.getElementById('heroImage');
  if (heroImage) heroImage.src = trek.images[0];

  const trekTitle = document.getElementById('trekTitle');
  if (trekTitle) trekTitle.textContent = trek.name;

  const trekTagline = document.getElementById('trekTagline');
  if (trekTagline) trekTagline.textContent = trek.tagline;

  const trekLocation = document.getElementById('trekLocation');
  if (trekLocation) trekLocation.textContent = trek.location;

  // Quick stats
  const statsHTML = `
    <div class="stat-item">
      <span class="stat-icon">📅</span>
      <span class="stat-value">${trek.duration.days}D/${trek.duration.nights}N</span>
      <span class="stat-label">Duration</span>
    </div>
    <div class="stat-item">
      <span class="stat-icon">⛰️</span>
      <span class="stat-value">${trek.altitude.max.toLocaleString()} ${trek.altitude.unit}</span>
      <span class="stat-label">Max Altitude</span>
    </div>
    <div class="stat-item">
      <span class="stat-icon">🥾</span>
      <span class="stat-value">${trek.distance.total} ${trek.distance.unit}</span>
      <span class="stat-label">Distance</span>
    </div>
    <div class="stat-item">
      <span class="stat-icon">💪</span>
      <span class="stat-value" style="color: ${trek.difficultyColor}">${trek.difficulty}</span>
      <span class="stat-label">Difficulty</span>
    </div>
  `;

  const quickStats = document.getElementById('quickStats');
  if (quickStats) quickStats.innerHTML = statsHTML;

  // Overview
  const overviewContent = document.getElementById('overviewContent');
  if (overviewContent) {
    overviewContent.innerHTML = `
      <p>${trek.overview}</p>
      <h4 style="margin-top: var(--space-xl); margin-bottom: var(--space-md);">Highlights</h4>
      <ul style="list-style: none; display: grid; gap: var(--space-sm);">
        ${trek.highlights.map(h => `
          <li style="display: flex; align-items: flex-start; gap: var(--space-sm);">
            <span style="color: var(--color-accent);">✓</span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Itinerary
  const itineraryContent = document.getElementById('itineraryContent');
  if (itineraryContent) {
    itineraryContent.innerHTML = trek.itinerary.map((day, index) => `
      <div class="itinerary-day" style="
        padding: var(--space-lg);
        background: var(--color-bg-elevated);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-md);
        border-left: 3px solid var(--color-accent);
      ">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-sm);">
          <h4 style="color: var(--color-accent);">Day ${day.day}</h4>
          <div style="display: flex; gap: var(--space-md); font-size: var(--text-sm); color: var(--color-text-muted);">
            ${day.altitude ? `<span>📍 ${day.altitude}</span>` : ''}
            ${day.distance ? `<span>📏 ${day.distance}</span>` : ''}
          </div>
        </div>
        <h5 style="margin-bottom: var(--space-sm);">${day.title}</h5>
        <p style="margin-bottom: var(--space-sm);">${day.description}</p>
        ${day.highlights ? `
          <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm); margin-top: var(--space-md);">
            ${day.highlights.map(h => `
              <span style="
                padding: var(--space-xs) var(--space-sm);
                background: rgba(255, 107, 53, 0.1);
                border-radius: var(--radius-sm);
                font-size: var(--text-xs);
                color: var(--color-accent);
              ">${h}</span>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  // Inclusions
  const inclusionsContent = document.getElementById('inclusionsContent');
  if (inclusionsContent) {
    inclusionsContent.innerHTML = `
      <ul style="list-style: none; display: grid; gap: var(--space-sm);">
        ${trek.inclusions.map(item => `
          <li style="display: flex; align-items: flex-start; gap: var(--space-sm);">
            <span style="color: var(--color-secondary);">✓</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Exclusions
  const exclusionsContent = document.getElementById('exclusionsContent');
  if (exclusionsContent) {
    exclusionsContent.innerHTML = `
      <ul style="list-style: none; display: grid; gap: var(--space-sm);">
        ${trek.exclusions.map(item => `
          <li style="display: flex; align-items: flex-start; gap: var(--space-sm);">
            <span style="color: #ef4444;">✗</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Pricing
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceDisplay) {
    priceDisplay.innerHTML = `
      <div style="display: flex; align-items: baseline; gap: var(--space-sm); margin-bottom: var(--space-sm);">
        <span style="font-size: var(--text-3xl); font-weight: 700; color: var(--color-accent);">
          ${trek.currency}${trek.price.toLocaleString()}
        </span>
        <span style="text-decoration: line-through; color: var(--color-text-muted);">
          ${trek.currency}${trek.originalPrice.toLocaleString()}
        </span>
      </div>
      <p style="font-size: var(--text-sm); color: var(--color-text-muted);">per person</p>
    `;
  }

  // Best months
  const bestMonths = document.getElementById('bestMonths');
  if (bestMonths) {
    bestMonths.innerHTML = trek.bestMonths.map(month => `
      <span style="
        padding: var(--space-xs) var(--space-sm);
        background: var(--color-bg-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-size: var(--text-sm);
      ">${month}</span>
    `).join('');
  }

  // Image gallery
  const imageGallery = document.getElementById('imageGallery');
  if (imageGallery && trek.images.length > 1) {
    imageGallery.innerHTML = trek.images.slice(1).map(img => `
      <img src="${img}" alt="${trek.name}" 
           style="width: 100px; height: 70px; object-fit: cover; border-radius: var(--radius-md); cursor: pointer; opacity: 0.7; transition: opacity 0.2s;"
           onclick="document.getElementById('heroImage').src = '${img}'; this.style.opacity = 1;"
           onmouseover="this.style.opacity = 1"
           onmouseout="this.style.opacity = 0.7">
    `).join('');
  }
}

function renderCommunityTreks() {
  const communityGrid = document.getElementById('communityTreksGrid');
  if (!communityGrid) return;

  if (userTreks.length === 0) {
    communityGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: var(--space-4xl);">
        <h3>No community treks yet</h3>
        <p style="color: var(--color-text-muted); margin-bottom: var(--space-xl);">
          Be the first to create a trek for others to join!
        </p>
        <a href="create-trek.html" class="btn btn-primary">Create a Trek</a>
      </div>
    `;
  } else {
    communityGrid.innerHTML = userTreks.map(createCommunityTrekCard).join('');
  }
}

// =====================================================
// EVENT HANDLERS
// =====================================================

function setupSearchAndFilters() {
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  if (searchInput && searchBtn) {
    const performSearch = () => {
      const query = searchInput.value.trim();
      const activeFilter = document.querySelector('.filter-tag.active');
      const category = activeFilter ? activeFilter.dataset.filter : 'all';

      const filteredTreks = filterTreks(treksData.treks, query, category);

      const trekGrid = document.getElementById('trekGrid');
      if (trekGrid) {
        trekGrid.innerHTML = filteredTreks.map(createTrekCard).join('');
      }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  // Filter tags
  document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const category = tag.dataset.filter;
      const query = searchInput ? searchInput.value.trim() : '';
      const filteredTreks = filterTreks(treksData.treks, query, category);

      const trekGrid = document.getElementById('trekGrid');
      if (trekGrid) {
        trekGrid.innerHTML = filteredTreks.map(createTrekCard).join('');
      }
    });
  });
}

function setupCreateTrekForm() {
  const form = document.getElementById('createTrekForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const newTrek = {
      id: generateId(),
      name: formData.get('trekName'),
      location: formData.get('location'),
      difficulty: formData.get('difficulty'),
      duration: {
        days: parseInt(formData.get('days')),
        nights: parseInt(formData.get('nights'))
      },
      price: parseInt(formData.get('price')),
      groupSize: parseInt(formData.get('groupSize')),
      spotsLeft: parseInt(formData.get('groupSize')),
      date: formData.get('date'),
      description: formData.get('description'),
      meetingPoint: formData.get('meetingPoint'),
      inclusions: formData.get('inclusions').split('\n').filter(i => i.trim()),
      organizer: formData.get('organizerName'),
      contact: formData.get('contact'),
      image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400',
      createdAt: new Date().toISOString()
    };

    saveUserTrek(newTrek);

    // Show success message
    alert('Trek created successfully! Redirecting to community treks...');
    window.location.href = 'community-treks.html';
  });
}

function joinTrek(trekId) {
  const trek = userTreks.find(t => t.id === trekId);
  if (!trek) return;

  if (trek.spotsLeft <= 0) {
    alert('Sorry, this trek is fully booked!');
    return;
  }

  const name = prompt('Enter your name to join this trek:');
  if (!name) return;

  const email = prompt('Enter your email:');
  if (!email) return;

  // Update spots
  trek.spotsLeft--;
  localStorage.setItem('userTreks', JSON.stringify(userTreks));

  alert(`Thank you ${name}! You've been registered for ${trek.name}. The organizer (${trek.organizer}) will contact you at ${email}.`);

  // Refresh the display
  renderCommunityTreks();
}

// =====================================================
// HEADER & SCROLL
// =====================================================

function setupHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileNavOverlay');

  if (!menuBtn || !mobileNav || !overlay) return;

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
  });
}

// =====================================================
// TAB FUNCTIONALITY
// =====================================================

function setupTabs() {
  const tabBtns = document.querySelectorAll('[data-tab]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;

      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panels
      tabPanels.forEach(panel => {
        if (panel.dataset.tabPanel === tabId) {
          panel.classList.add('active');
          panel.style.display = 'block';
        } else {
          panel.classList.remove('active');
          panel.style.display = 'none';
        }
      });
    });
  });
}

// =====================================================
// INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  // Common setup
  setupHeader();
  setupMobileMenu();
  setupTabs();
  loadUserTreks();

  // Page-specific initialization
  const page = document.body.dataset.page;

  switch (page) {
    case 'home':
      initHomePage();
      break;
    case 'treks':
      initTreksPage();
      break;
    case 'trek-detail':
      initTrekDetailPage();
      break;
    case 'community-treks':
      initCommunityTreksPage();
      break;
    case 'create-trek':
      initCreateTrekPage();
      break;
    default:
      // Try to detect page from URL
      const path = window.location.pathname;
      if (path.includes('trek-detail')) {
        initTrekDetailPage();
      } else if (path.includes('treks.html')) {
        initTreksPage();
      } else if (path.includes('community-treks')) {
        initCommunityTreksPage();
      } else if (path.includes('create-trek')) {
        initCreateTrekPage();
      } else {
        initHomePage();
      }
  }
});

// Export for use in other scripts
window.TrekExplorers = {
  loadTrekData,
  loadUserTreks,
  saveUserTrek,
  filterTreks,
  createTrekCard,
  joinTrek
};
