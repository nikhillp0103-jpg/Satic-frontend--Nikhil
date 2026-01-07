
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const cta = document.querySelector('.primary-btn');
  

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  
  cta.addEventListener('click', () => {
    alert('Get Started - Professional Navbar Complete!');
  });
  
  console.log('Satic Day 3 Glass Navbar Loaded ✅');
});
