let menuBtn = document.querySelector(".menu__burger-icon");
let menu = document.querySelector(".menu__body");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
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
