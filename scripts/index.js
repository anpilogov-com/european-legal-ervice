/** JQuery конфигурация слайдера */

$(window).on("load", () => {
   setCarouselSettings();
});

// Начало блока реализации события
// после изменения размера window

var resize_timeout;

$(window).on("resize orientationchange", function () {
   clearTimeout(resize_timeout);

   resize_timeout = setTimeout(function () {
      $(window).trigger("resized");
   }, 250);
});

$(window).on("resized", () => {
   if ($(window).width() >= 769)
      $(".owl-stage").css({
         "padding-left": `${getMarginAboutContainer()}px`,
         "padding-right": `${getMarginAboutContainer()}px`,
      });
});

// Конец блока

function getMarginAboutContainer() {
   return ($(window).width() - $(".about__container").outerWidth()) / 2;
}

function setCarouselSettings() {
   $(".owl-carousel").owlCarousel({
      items: 3,
      nav: true,
      dots: true,
      margin: 35,
      navContainer: ".owl-nav",
      dotsContainer: ".owl-dots",
      responsiveClass: true,
      responsive: {
         280: {
            items: 1,
            stagePadding: 16,
            center: true,
            mergeFit: true,
         },
         768: {
            items: 2,
            stagePadding: 24,
            mergeFit: false,
         },
         769: {
            items: 3,
            stagePadding: getMarginAboutContainer(),
         },
      },
   });
}
