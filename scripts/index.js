$(window).on("load", () => {
   $(".slider").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1500,
      infinite: false,
      initialSlide: 0,
   });
});
