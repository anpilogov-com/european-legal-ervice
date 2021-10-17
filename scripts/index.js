/** JQuery конфигурация слайдера */

$(window).on("load", () => {
   $(".slider").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      infinite: false,
      initialSlide: 0,
      waitForAnimate: false,
      variableWidth: true,
   });
});
