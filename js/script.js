

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.search-btn');
const pages = document.querySelectorAll('.page');
const menuItems = document.querySelectorAll('.menu-item');
const cards = document.querySelectorAll('.card');

// ========== MENU FUNCTIONS ==========
function closeMenu() {
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
  sidebar.classList.remove('active');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const isActive = hamburger.classList.contains('active');
  if (isActive) {
    closeMenu();
  } else {
    hamburger.classList.add('active');
    overlay.classList.add('active');
    sidebar.classList.add('active');
    document.body.classList.add('menu-open');
  }
}

// ========== PAGE SWITCHING ==========
function showPage(pageId) {
  // Hide all pages
  pages.forEach(page => page.classList.remove('active'));
  
  // Remove active from all menu items
  menuItems.forEach(item => item.classList.remove('active'));
  
  // Show selected page
  const targetPage = document.querySelector(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Add active to clicked menu item
  const activeMenuItem = document.querySelector(`a[href="${pageId}"]`);
  if (activeMenuItem) {
    activeMenuItem.classList.add('active');
  }
  
  closeMenu(); // Close mobile menu after navigation
}

// ========== SEARCH FUNCTIONALITY ==========
function searchCards() {
  const query = searchInput.value.toLowerCase().trim();
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(query) || description.includes(query) || query === '') {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.3s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Website loaded successfully!');
  
  // Menu Events
  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);
  
  // Outside click detection
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Search Events
  searchBtn.addEventListener('click', searchCards);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchCards();
    }
  });
  
  // Menu Navigation
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = item.getAttribute('href');
      showPage(pageId);
    });
  });
  
  // Card buttons
  const cardBtns = document.querySelectorAll('.card-btn');
  cardBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const cardTitle = this.closest('.card').querySelector('h3').textContent;
      alert(`🎉 "${cardTitle}" selected! Feature coming soon...`);
    });
  });
  
  // Show home page by default
  showPage('#home');
});

// ========== UTILITY FUNCTIONS ==========
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Real-time search (debounced)
const debouncedSearch = debounce(searchCards, 300);
searchInput.addEventListener('input', debouncedSearch);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  // ESC to close menu
  if (e.key === 'Escape') {
    closeMenu();
    searchInput.blur();
  }
  
  // Ctrl+K for search focus
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
});

// Smooth scroll for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Preloader (optional - remove if not needed)
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// PWA Support (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed'));
  });
}

console.log('✅ All features loaded: Menu, Search, Navigation, Cards, Keyboard shortcuts');
