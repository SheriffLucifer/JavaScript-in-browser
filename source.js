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

setInterval(() => {
  if (window.innerWidth >= 768) {
    hideSwiper.style.display = "none";
  } else {
    hideSwiper.style.display = "block";
  }
}, 0);

function handleShowAndHide() {
  slides.forEach((item, index) => {
    item.classList.add("slide-show");
    if (window.innerWidth >= 768 && window.innerWidth < 1120 && index >= 6) {
      item.classList.add("slide-hide");
    } else if (window.innerWidth >= 1120 && index >= 8) {
      item.classList.add("slide-hide");
    }
  });
}

function handleClick() {
  slides.forEach((item, index) => {
    if (window.innerWidth >= 1120 && index >= 8) {
      item.classList.toggle("slide-hide");
    } else if (
      window.innerWidth >= 768 &&
      window.innerWidth < 1120 &&
      index > 6
    ) {
      item.classList.toggle("slide-hide");
    }
    if (button.innerHTML === "Показать все") {
      button.innerHTML = "Скрыть";
      button.classList.remove("btn-show");
      button.classList.add("btn-hide");
    } else {
      button.innerHTML = "Показать все";
      button.classList.remove("btn-hide");
      button.classList.add("btn-show");
    }
  });
}

let slides = document.querySelectorAll(".content__slide");
let button = document.querySelector(".content__button");

console.log(slides);

window.addEventListener("showAndHide", handleShowAndHide);
window.addEventListener("click", handleClick);

handleShowAndHide();
// showAndHide(
//   button,
//   downloadMore,
//   arrowsButton,
//   newText,
//   "Показать все",
//   "Скрыть"
// );
