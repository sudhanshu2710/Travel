const nav = document.querySelector(".nav");
const nav2bar = document.querySelector(".nav2bar");
const btnNav_open = document.querySelector(".nav__open");
const nav_overlay = document.querySelector(".nav__overlay");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");
const container = document.querySelector(".section__container");
let window_width = window.innerWidth;
if (window_width < 900 && !nav.classList.contains("hidden")) {
  nav.classList.add("hidden");
  nav2bar.classList.remove("hidden");
}
const navHeight = nav.getBoundingClientRect().height;
const obsCallBack = function (entries) {
  console.log(entries);
  const [entry] = entries;
  const current = nav.classList.contains("hidden") ? nav2bar : nav;
  if (!entry.isIntersecting) current.classList.add("sticky");
  else current.classList.remove("sticky");
};
const obsOptions = {
  root: null,
  threshold: 0.6,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(header);

window.addEventListener("resize", function () {
  window_width = window.innerWidth;

  if (
    nav.classList.contains("hidden") &&
    window_width > 900 &&
    !nav2bar.classList.contains("hidden")
  ) {
    nav.classList.remove("hidden");
    nav2bar.classList.add("hidden");
  }
  if (
    !nav.classList.contains("hidden") &&
    window_width < 900 &&
    nav2bar.classList.contains("hidden")
  ) {
    nav.classList.add("hidden");
    nav2bar.classList.remove("hidden");
  }
});

btnNav_open.addEventListener("click", function () {
  nav_overlay.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  nav_overlay.classList.add("hidden");
  overlay.classList.add("hidden");
});

console.log("hello");
