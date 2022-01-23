const cards = [
  {
    img: "https://preview.colorlib.com/theme/travel/img/hotels/xd1.jpg.pagespeed.ic.d1dQmfpfKP.webp",
    name: "Hilton Star Hotel",
    star: 4,
    swim: true,
    gym: true,
    wifi: false,
    roomService: true,
    AC: true,
    Restaurant: false,
    Price: 500,
  },
  {
    img: "https://preview.colorlib.com/theme/travel/img/hotels/xd2.jpg.pagespeed.ic.JJbr_puNQr.webp",
    name: "Hilton Star Hotel",
    star: 4,
    swim: true,
    gym: true,
    wifi: false,
    roomService: true,
    AC: true,
    Restaurant: false,
    Price: 500,
  },
  {
    img: "https://preview.colorlib.com/theme/travel/img/hotels/xd3.jpg.pagespeed.ic.g-iyHp_03C.webp",
    name: "Hilton Star Hotel",
    star: 4,
    swim: true,
    gym: true,
    wifi: false,
    roomService: true,
    AC: true,
    Restaurant: false,
    Price: 500,
  },
  {
    img: "https://preview.colorlib.com/theme/travel/img/hotels/xd4.jpg.pagespeed.ic.aztqirdg7C.webp",
    name: "Hilton Star Hotel",
    star: 4,
    swim: true,
    gym: true,
    wifi: false,
    roomService: true,
    AC: true,
    Restaurant: false,
    Price: 500,
  },
  {
    img: "https://preview.colorlib.com/theme/travel/img/hotels/xd5.jpg.pagespeed.ic.-TtwJwHje_.webp",
    name: "Hilton Star Hotel",
    star: 4,
    swim: true,
    gym: true,
    wifi: false,
    roomService: true,
    AC: true,
    Restaurant: false,
    Price: 500,
  },
  {
    img: "https://preview.colorlib.com/theme/travel/img/hotels/xd6.jpg.pagespeed.ic.1R4XCWcaOT.webp",
    name: "Hilton Star Hotel",
    star: 4,
    swim: true,
    gym: true,
    wifi: false,
    roomService: true,
    AC: true,
    Restaurant: false,
    Price: 500,
  },
];

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

function load(cardArray) {
  cardArray.forEach(function (card) {
    const html = document.createElement("div");

    html.classList.add("card__container");
    html.innerHTML = `
    <img class="card__items card__img" /src="${card.img}">
    <div class="card__items card__name"><div>${card.name}</div><div style="display:flex; font-size:20px"><div style="color:rgb(8, 122, 122);">&#9733;&#9733;&#9733;&#9733;</div><div style="color:rgb(8, 122, 122);">&#10032;</div></div></div>
    <div class="card__items card__swim"><div>Swimingpool</div> <div>${card.swim}</div></div>
    <div class="card__items card__gym"><div>Gymnesium</div> <div>${card.gym}</div></div>
    <div class="card__items card__wifi"><div>Wi-Fi</div> <div>${card.wifi}</div></div>
    <div class="card__items card__room"><div>Room Service</div> <div>${card.roomService}</div></div>
    <div class="card__items card__ac"><div>Air Condition</div> <div>${card.AC}</div></div>
    <div class="card__items card__res"><div>Restaurant</div> <div>${card.Restaurant}</div></div>
    <div class="card__items card__price"><div>Price</div> <div class="card__button">$${card.Price}</div></div>
    `;
    container.append(html);
    html.addEventListener("mouseenter", function (e) {
      html.classList.add("card__container__glow");
      // console.log("enter", e.target);
      html.classList.add("html__focus");
    });
    html.addEventListener("mouseleave", function (e) {
      html.classList.remove("card__container__glow");
      //  console.log("out", e.target);
      html.classList.remove("html__focus");
    });
  });
}

load(cards);

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
