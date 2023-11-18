"use sctrict";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  width: 320,
  loop: false,
  effect: "slider",

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    375: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.75,
    },
    480: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 2.4,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  },
});

const hideSwiper = document.querySelector(".swiper");

let isMoreVisible = false;

setInterval(() => {
  if (window.innerWidth >= 768) {
    hideSwiper.style.display = "none";
  } else {
    hideSwiper.style.display = "block";
  }
}, 0);

function showItems() {
  let toShow = window.innerWidth <= 1120 ? 6 : 8;

  slides.forEach((item, index) => {
    if (index < toShow) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function toggleMoreItems() {
  isMoreVisible = !isMoreVisible;

  slides.forEach((item, index) => {
    if (index >= (window.innerWidth < 1120 ? 6 : 8)) {
      item.style.display = isMoreVisible ? "flex" : "none";
    }
  });

  isMoreVisible
    ? (button.classList.add("btn-hide"), button.classList.remove("btn-show"))
    : (button.classList.add("btn-show"), button.classList.remove("btn-hide"));
  button.innerHTML = isMoreVisible ? "Скрыть" : "Показать все";
}

let slides = document.querySelectorAll(".content__slide");
let button = document.querySelector(".content__button");

console.log(slides);

window.addEventListener("resize", showItems);
button.addEventListener("click", toggleMoreItems);
document.addEventListener("DOMContentLoaded", showItems);
