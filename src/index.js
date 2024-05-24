import "./scss/style.scss";
import "./app";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// Hero swiper
new Swiper(".swiper", {
  modules: [Navigation, Pagination],
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
