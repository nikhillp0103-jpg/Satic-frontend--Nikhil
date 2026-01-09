const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("hamburger");

function openMenu() {
  menu.style.left = "0px";
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
  document.body.classList.add("noscroll");
}

function closeMenu() {
  menu.style.left = "-250px";
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  document.body.classList.remove("noscroll");
}

btn.addEventListener("click", () => {
  const open = menu.style.left === "0px";
  open ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

menu.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("click", closeMenu);
});
