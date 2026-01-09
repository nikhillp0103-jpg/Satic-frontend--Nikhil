const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidePanel = document.getElementById('sidePanel');
const navLinks = document.querySelectorAll('.nav-link');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

hamburger?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

overlay?.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    const pills = document.querySelectorAll('.nav-link-pill');
    pills.forEach(p => p.classList.remove('active'));
  });
});

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) {
    searchInput.focus();
    searchInput.placeholder = 'Enter search term...';
    setTimeout(() => searchInput.placeholder = 'Search...', 2000);
    return;
  }
  console.log('Search:', query);
  alert(`Searching "${query}"`);
});

document.querySelectorAll('.nav-link-pill, .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    this.closest('nav')?.querySelectorAll('.active')?.forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});
