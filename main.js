const lenis = new Lenis();

// alert(window.innerWidth);

// lenis smooth scrolling
lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function handleScrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

// handling scroll down image in header

document
  .getElementById("scrollDownImage")
  .addEventListener("click", handleScrollDown);

// animate on scroll initialization

AOS.init();

$(document).ready(function () {
  // slider for tutorial section
  $("#tutorial .owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
      },
    },
  });

  // slider for testimonial section
  $("#testimonial .owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    dots: true,
  });
});
