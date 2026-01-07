console.log("Satic Day 3: Desktop Navbar loaded");


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    e.target.classList.add('active');
  });
});


document.querySelector('.nav-cta').addEventListener('click', () => {
  alert('Get Started clicked!');
});
