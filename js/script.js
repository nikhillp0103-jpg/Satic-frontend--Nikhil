// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
  // HAMBURGER MENU FUNCTIONALITY
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  
  hamburgerBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Lock body scroll when menu is open
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking any nav link
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // SEARCH BAR FUNCTIONALITY
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const query = searchInput.value.trim();
    if (query) {
      alert(`🔍 Searching for: "${query}"`);
      searchInput.value = '';
    } else {
      alert('Please enter a search term!');
      searchInput.focus();
    }
  });
  
  // Close mobile menu when clicking outside (except hamburger button)
document.addEventListener('click', function(e) {
    const clickedHamburger = e.target.closest('#hamburgerBtn');
    const clickedInsideNav = e.target.closest('.navbar');

    if (!clickedInsideNav && !clickedHamburger && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});
  
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
});
