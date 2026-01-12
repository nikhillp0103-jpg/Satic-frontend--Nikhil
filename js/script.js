// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  
  // Lock body scroll when menu is open
  document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when nav item clicked
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    mainNav.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Search Functionality
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  
  if (!query) {
    alert('Please enter something to search!');
    searchInput.focus();
    return;
  }
  
  alert(`🔍 Searching for: "${query}"`);
  searchInput.value = '';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    mainNav.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
