document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');
  const menuItems = document.querySelectorAll('.menu-item');
  const navLinks = document.querySelectorAll('.nav-links a');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const pages = document.querySelectorAll('.page');

  
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById('home').classList.add('active');
  document.querySelector('.menu-item[data-page="home"]').classList.add('active');

  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    hamburger.classList.toggle('active', open);
    sidebar.classList.toggle('active', open);
    overlay.classList.toggle('active', open);
  }

  hamburger.addEventListener('click', () => toggleMenu(true));
  overlay.addEventListener('click', () => toggleMenu(false));
  closeBtn.addEventListener('click', () => toggleMenu(false));

  
  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = item.getAttribute('data-page');
      menuItems.forEach(i => i.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      document.getElementById(targetPage).classList.add('active');
      toggleMenu(false);
    });
  });

  
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = link.getAttribute('data-page');
      menuItems.forEach(i => i.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      document.querySelector(`.menu-item[data-page="${targetPage}"]`).classList.add('active');
      document.getElementById(targetPage).classList.add('active');
    });
  });

  
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      searchInput.style.borderColor = '#e53e3e';
      searchInput.placeholder = 'Please enter a search term';
      setTimeout(() => {
        searchInput.style.borderColor = '';
        searchInput.placeholder = 'Search anything...';
      }, 2000);
      return;
    }
    alert(`Searching for: "${query}"`);
    searchInput.value = '';
  });

  searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchForm.dispatchEvent(new Event('submit'));
  });

  
  document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card = btn.closest('.card');
      const title = card.querySelector('h3').textContent;
      alert(`Interested in ${title}? Coming soon! 🚀`);
    });
  });

  
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 820) toggleMenu(false);
  });
});
