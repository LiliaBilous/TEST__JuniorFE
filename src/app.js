// Header burger menu
let menuBtn = document.querySelector(".burger");
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

// Remove placeholder when entered text
const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const placeholder = this.parentElement.querySelector(".placeholder");
    if (this.value !== "") {
      placeholder.classList.add("hide");
    } else {
      placeholder.classList.remove("hide");
    }
  });

  input.addEventListener("focus", function () {
    const placeholder = this.parentElement.querySelector(".placeholder");
    placeholder.classList.add("hide");
  });

  input.addEventListener("blur", function () {
    const placeholder = this.parentElement.querySelector(".placeholder");
    if (this.value === "") {
      placeholder.classList.remove("hide");
    }
  });
});
