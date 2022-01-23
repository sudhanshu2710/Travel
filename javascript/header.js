//applying a class to header after scrolling y-axis
window.addEventListener("scroll", () => {
    var header = document.querySelector("[header-sticky]");
    var windowPosition = window.scrollY > 150;

    header.classList.toggle("scrolling-active", windowPosition);
});

// navigation bar style
var navbarList = document.querySelector('[navbar-list]');
var hamburger = document.querySelector('[hamburger]');

hamburger.addEventListener('click', () => {
    navbarList.classList.toggle("navbar-show");
});
