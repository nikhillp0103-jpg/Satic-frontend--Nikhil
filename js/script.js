document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  const links = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const cta = document.querySelector('.primary-btn');
  const hamburger = document.querySelector('.mobile-trigger, #hamburger');



  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
      
 
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

 
  if (cta) cta.addEventListener('click', () => alert('Get Started!'));

 
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });

  console.log('Day 4 Mobile Navbar Loaded ✅');
});
