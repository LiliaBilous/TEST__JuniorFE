let menuBtn = document.querySelector(".menu__icon");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("menu-open");
  menu.classList.toggle("active");
});

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
