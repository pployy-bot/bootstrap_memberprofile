document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    },
    on: {
      slideChangeTransitionEnd: function () {
        document.querySelectorAll(".swiper-slide").forEach((slide) => {
          slide.classList.remove("active-slide");
        });
        document
          .querySelector(".swiper-slide-active")
          .classList.add("active-slide");
      },
    },
  });
});
