var mySwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 8000,
  },

  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});

var storiesSlider = new Swiper(".stories-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".stories-info__button--next",
    prevEl: ".stories-info__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});