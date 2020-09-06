$(document).ready(function () {

  var tabsItems = $(".tabs__item");
  var contentItem = $(".tabs-content__item");

  tabsItems.on("click", function (event) {
    var activeCotent = $(this).attr("data-target");
    tabsItems.removeClass("tabs__item--active");
    contentItem.removeClass("tabs-content__item--active");
    $(activeCotent).addClass("tabs-content__item--active");
    $(this).addClass("tabs__item--active");
  });

  var mySwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 7000,
    },
    // Остановка слайдера при наведении курсора
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
    // Optional parameters
    // loop: true,

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

  // обработка формы subscribe
  $(".subscribe").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "Field mail is required",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
});