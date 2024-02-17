const lenis = new Lenis();

// alert(window.innerWidth);

// lenis smooth scrolling
lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// function handleScrollDown() {
//   window.scrollTo({
//     top: window.innerHeight,
//     behavior: "smooth",
//   });
// }

// // handling scroll down image in header

// document
//   .getElementById("scrollDownImage")
//   .addEventListener("click", handleScrollDown);

const handleScrollDown = (e) => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scrollDownImage");
  var scrollButton2 = document.getElementById("scrollDownImage2");

  scrollButton.addEventListener("click", function (e) {
    // Scroll down by 100vh
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

  scrollButton2.addEventListener("click", function (e) {
    // Scroll down by 100vh
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

  // Check scroll position to hide button at the bottom
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var viewportHeight = window.innerHeight;

    if (scrollPosition > document.body.scrollHeight - viewportHeight - 100) {
      scrollButton.classList.add("opacity-0");
      scrollButton2.classList.add("opacity-0");
    } else {
      scrollButton.classList.remove("opacity-0");
      scrollButton2.classList.remove("opacity-0");
    }
  });
});

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

document.getElementById("year").innerText = new Date().getFullYear();
