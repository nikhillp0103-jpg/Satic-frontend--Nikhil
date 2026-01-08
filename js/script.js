const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const items = document.querySelectorAll(".menu li");

hamburger.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
};

overlay.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};

items.forEach(item => {
    item.onclick = () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    };
});

