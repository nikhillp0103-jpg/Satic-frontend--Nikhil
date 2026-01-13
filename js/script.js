// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

  // HAMBURGER MENU FUNCTIONALITY
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // prevents immediate close
    navLinks.classList.toggle('active');

    // Lock body scroll when menu is open
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking nav links
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const clickedHamburger = e.target.closest('#hamburgerBtn');
    const clickedInsideNav = e.target.closest('.navbar');

    if (!clickedInsideNav && !clickedHamburger && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
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


// NOTIFICATION SYSTEM
function showNotification(type, message) {
  const container = document.getElementById('notificationContainer');

  const notif = document.createElement('div');
  notif.classList.add('notification', type);
  notif.innerHTML = `
    <span>${message}</span>
    <button>Dismiss</button>
  `;

  // Dismiss action
  notif.querySelector('button').addEventListener('click', () => {
    notif.remove();
  });

  container.appendChild(notif);

  // Auto-remove after 4 sec
  setTimeout(() => {
    notif.remove();
  }, 4000);
}

// Buttons Trigger
document.getElementById('showSuccess').addEventListener('click', () => {
  showNotification('success', 'Day 7 Task Completed Successfully!');
});

document.getElementById('showError').addEventListener('click', () => {
  showNotification('error', 'Something went wrong!');
});
