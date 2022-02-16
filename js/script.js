AOS.init({
  duration: 1200,
});
$(document).ready(function () {
  let bannerCarousel = $("#banner__carusel");
  bannerCarousel.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    autoplay: false,
    smartSpeed: 700,
    items: 1,
    animateOut: "fadeOut",
    // responsive: {
    // 	0: {
    // 		items: 1,
    // 		margin: 15
    // 	},
    // 	576: {
    // 		items: 2,
    // 		margin: 15
    // 	},

    // 	768: {
    // 		margin: 20,
    // 		items: 3
    // 	},
    // 	992: {
    // 		margin: 25,

    // 	},
    // 	1200: {
    // 		margin: 30,
    // 		items: 4
    // 	}
    // }
  });
  $(".linksright").click(function () {
    bannerCarousel.trigger("next.owl.carousel");
  });
  $(".linksleft").click(function () {
    bannerCarousel.trigger("prev.owl.carousel");
  });

  let servicesCarousel = $("#services__carusel");
  servicesCarousel.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    autoplay: false,
    smartSpeed: 700,
    items: 4,
    margin: 30,
    // responsive: {
    // 	0: {
    // 		items: 1,
    // 		margin: 15
    // 	},
    // 	576: {
    // 		items: 2,
    // 		margin: 15
    // 	},

    // 	768: {
    // 		margin: 20,
    // 		items: 3
    // 	},
    // 	992: {
    // 		margin: 25,

    // 	},
    // 	1200: {
    // 		margin: 30,
    // 		items: 4
    // 	}
    // }
  });
  $(".servicesright").click(function () {
    servicesCarousel.trigger("next.owl.carousel");
  });
  $(".servicesleft").click(function () {
    servicesCarousel.trigger("prev.owl.carousel");
  });
});
