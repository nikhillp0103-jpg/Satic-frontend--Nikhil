const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidePanel = document.getElementById('sidePanel');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
  sidePanel.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
  sidePanel.classList.remove('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    sidePanel.classList.remove('active');
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    alert('Please enter a search term.');
    document.getElementById('searchInput').focus();
    return;
  }
  alert(`Searching for: "${query}"`);
  console.log('Search query:', query);
});
