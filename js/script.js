const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const items = document.querySelectorAll(".menu li");

function openMenu() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

hamburger.onclick = () => {
    sidebar.classList.contains("active") ? closeMenu() : openMenu();
};

overlay.onclick = closeMenu;

items.forEach(item => {
    item.onclick = () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        closeMenu();
    };
});

