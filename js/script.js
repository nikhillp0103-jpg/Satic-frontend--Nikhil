document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const body = document.body;
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-pill');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('menu-open');
    this.classList.toggle('active');
  });

  overlay.addEventListener('click', function() {
    body.classList.remove('menu-open');
    hamburger.classList.remove('active');
  });

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      body.classList.remove('menu-open');
      hamburger.classList.remove('active');
      navLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      alert('Please enter search term');
      searchInput.focus();
      return;
    }
    console.log('Searching for:', query);
  });
});
