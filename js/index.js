// Header burger menu
let menuBtn = document.querySelector(".menu__burger-icon");
let menu = document.querySelector(".menu__body");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// Hero swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".nav-button-right",
    prevEl: ".nav-button-left",
  },
  pagination: {
    el: ".slider__fraction",
    type: "fraction",
  },
});

// Scrolling to Anchor Smoothly
document.querySelectorAll(".menu__link").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = document.querySelector(".header").offsetHeight;

    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: "smooth",
    });
  });
});
