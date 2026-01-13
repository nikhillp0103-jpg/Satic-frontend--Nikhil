
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

  // HAMBURGER MENU FUNCTIONALITY
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    navLinks.classList.toggle('active');

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
      showNotification('success', `🔍 Searching for: "${query}"`);
      searchInput.value = '';
    } else {
      showNotification('error', 'Please enter a search term!');
      searchInput.focus();
    }
  });

  // NOTIFICATION FUNCTIONS
  function showNotification(type = 'success', message = 'Notification message') {
    const notifications = {
      success: document.getElementById('successNotification'),
      error: document.getElementById('errorNotification')
    };
    
    const notification = notifications[type];
    if (!notification) return;

    // Hide other notification
    Object.values(notifications).forEach(n => {
      if (n !== notification) n.classList.add('hidden');
    });

    // Update message if custom
    const notificationMessage = notification.querySelector('.notification-message');
    const strongTitle = notificationMessage.querySelector('strong');
    const messageText = strongTitle ? strongTitle.nextSibling || notificationMessage.lastElementChild : notificationMessage;
    
    if (message !== 'Notification message') {
      if (messageText) {
        messageText.textContent = message;
      }
    }

    // Show notification
    notification.classList.remove('hidden');
    setTimeout(() => notification.classList.add('show'), 10);

    // Auto hide after 5 seconds
    const autoHideTimeout = setTimeout(() => hideNotification(notification), 5000);

    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    const onClose = () => {
      clearTimeout(autoHideTimeout);
      hideNotification(notification);
      closeBtn.removeEventListener('click', onClose);
    };
    closeBtn.addEventListener('click', onClose);
  }

  function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 400);
  }

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

  
  document.querySelector('.btn.primary').addEventListener('click', () => {
    showNotification('success', 'Primary action completed successfully!');
  });

  document.querySelector('.btn.secondary').addEventListener('click', () => {
    showNotification('success', 'Secondary action completed!');
  });

  // Original Send button demo
  document.querySelector('.original-btn:not(:disabled)').addEventListener('click', () => {
    showNotification('success', 'Task submitted successfully!');
  });
});
