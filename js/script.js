const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const menuItems = document.querySelectorAll('.menu-item');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');

hamburger.onclick = () => {
  document.body.classList.toggle('menu-open');
};

overlay.onclick = () => {
  document.body.classList.remove('menu-open');
};

menuItems.forEach(item => {
  item.onclick = () => {
    document.body.classList.remove('menu-open');
    menuItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  };
});

searchBtn.onclick = () => {
  const text = searchInput.value.trim();
  if (text === '') {
    alert('Please type something');
  } else {
    alert('Searching: ' + text);
  }
};
