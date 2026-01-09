document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');
  const menuItems = document.querySelectorAll('.menu-item');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const pages = document.querySelectorAll('.page');


  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    hamburger.classList.toggle('active', open);
  }

  hamburger.addEventListener('click', () => toggleMenu(true));
  overlay.addEventListener('click', () => toggleMenu(false));
  closeBtn.addEventListener('click', () => toggleMenu(false));

  
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = item.getAttribute('data-page');
      
      
      menuItems.forEach(i => i.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      document.getElementById(targetPage).classList.add('active');
      
      toggleMenu(false);
    });
  });

  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) {
      searchInput.style.borderColor = '#ef5350';
      searchInput.placeholder = 'Please enter a search term';
      setTimeout(() => {
        searchInput.style.borderColor = '';
        searchInput.placeholder = 'Search anything...';
      }, 2000);
      return;
    }
    console.log('Searching for:', query);
    alert(`Searching for: "${query}"`);
    searchInput.value = '';
  });

  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchForm.dispatchEvent(new Event('submit'));
    }
  });
});
