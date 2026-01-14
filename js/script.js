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
    <button onclick="this.parentElement.remove()">Dismiss</button>
  `;

  container.appendChild(notif);
}


// Buttons Trigger
document.getElementById('showSuccess').addEventListener('click', () => {
  showNotification('success', 'Day 7 Task Completed Successfully!');
});

document.getElementById('showError').addEventListener('click', () => {
  showNotification('error', 'Something went wrong!');
});



// DAY 8 FORM LOGIC
const taskInput = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const formError = document.getElementById('formError');

taskInput.addEventListener('input', () => {
  const value = taskInput.value.trim();

  if (value.length === 0) {
    submitBtn.disabled = true;
    submitBtn.classList.remove('enabled');
    formError.style.display = 'none';
    taskInput.classList.remove('error');
  } else {
    submitBtn.disabled = false;
    submitBtn.classList.add('enabled');
    formError.style.display = 'none';
    taskInput.classList.remove('error');
  }
});

document.getElementById('day8Form').addEventListener('submit', (e) => {
  e.preventDefault();

  const value = taskInput.value.trim();
  if (value.length === 0) {
    formError.textContent = 'Please enter something!';
    formError.style.display = 'block';
    taskInput.classList.add('error');
    return;
  }

  alert(`Form Submitted: ${value}`);
  taskInput.value = '';
  submitBtn.disabled = true;
  submitBtn.classList.remove('enabled');
});

