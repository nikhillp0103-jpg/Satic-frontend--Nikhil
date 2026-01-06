console.log("Satic Day 2: Primary Button loaded");

document.querySelectorAll('.primary-btn:not([disabled])').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Primary button clicked!');
  });
});
