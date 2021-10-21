/** JQuery конфигурация слайдера */

$(window).on("load", () => {
   let position = 0;
   var owl = $(".owl-carousel");

   $(".owl-carousel").owlCarousel({
      items: 3,
      center: false,

      dots: false,

      margin: 30,
      stagePadding: 150,

      startPosition: 0,

      smartSpeed: 350,

      responsiveClass: false,
      responsive: {
         1920: {
            items: 3,
            stagePadding: 390,
            autoWidth: false,
         },
         1440: {
            items: 3,
            stagePadding: 150,
            autoWidth: false,
         },
         1280: {
            items: 3,
            stagePadding: 70,
            autoWidth: false,
         },
         1140: {
            items: 3,
            stagePadding: 150,
            autoWidth: false,
         },
         1024: {
            items: 3,
            stagePadding: 100,
            autoWidth: false,
         },
         920: {
            items: 3,
            stagePadding: 45,
            autoWidth: false,
         },
         820: {
            items: 3,
            stagePadding: 45,
            autoWidth: false,
         },
         769: {
            items: 3,
            stagePadding: 32,
            autoWidth: false,
         },
         768: {
            items: 2,
            stagePadding: 32,
            autoWidth: false,
         },
         520: {
            items: 2,
            stagePadding: 32,
            center: true,
         },
         425: {
            items: 1,
            stagePadding: 32,
            center: true,
         },
         375: {
            items: 1,
            stagePadding: 32,
            center: true,
            margin: 34,
         },
         320: {
            items: 1,
            stagePadding: 32,
            center: true,
            margin: 34,
         },
         100: {
            items: 1,
            stagePadding: 16,
            center: true,
            margin: 34,
         },
      },
   });

   $(".owl-next").click(function () {
      if ($(window).width() <= 768) {
         owl.trigger("next.owl.carousel");
      } else {
         if (position < 3) owl.trigger("next.owl.carousel");
         else owl.trigger("to.owl.carousel", [3, 300]);
      }
   });

   $(".owl-prev").click(function () {
      owl.trigger("prev.owl.carousel", [300]);
   });

   owl.on("changed.owl.carousel", function (event) {
      position = event.item.index;
      removeDotActiveClass();
      switch (event.item.index) {
         case 0: {
            $(".owl-dot.firs").addClass("active");
            break;
         }
         case 1: {
            $(".owl-dot.tow").addClass("active");
            break;
         }
         case 2: {
            $(".owl-dot.thre").addClass("active");
            break;
         }
         case 3: {
            $(".owl-dot.fore").addClass("active");
            break;
         }
         case 4: {
            $(".owl-dot.five").addClass("active");
            break;
         }
         case 5: {
            $(".owl-dot.six").addClass("active");
            break;
         }
         default:
            break;
      }
   });

   $(".owl-dot.firs").click(function () {
      owl.trigger("to.owl.carousel", [0, 300]);
      removeDotActiveClass();
      $(".owl-dot.firs").addClass("active");
   });

   $(".owl-dot.tow").click(function () {
      owl.trigger("to.owl.carousel", [1, 300]);
      removeDotActiveClass();
      $(".owl-dot.tow").addClass("active");
   });

   $(".owl-dot.thre").click(function () {
      owl.trigger("to.owl.carousel", [2, 300]);
      removeDotActiveClass();
      $(".owl-dot.thre").addClass("active");
   });

   $(".owl-dot.fore").click(function () {
      owl.trigger("to.owl.carousel", [3, 300]);
      removeDotActiveClass();
      $(".owl-dot.fore").addClass("active");
   });

   $(".owl-dot.five").click(function () {
      owl.trigger("to.owl.carousel", [4, 300]);
      removeDotActiveClass();
      $(".owl-dot.five").addClass("active");
   });

   $(".owl-dot.six").click(function () {
      owl.trigger("to.owl.carousel", [5, 300]);
      removeDotActiveClass();
      $(".owl-dot.five").addClass("active");
   });
});

function removeDotActiveClass() {
   $(".owl-dot").removeClass("active");
}
