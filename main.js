const lenis = new Lenis();

lenis.on("scroll", (e) => {
  //   console.log(e);
});

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

document
  .getElementById("scrollDownImage")
  .addEventListener("click", handleScrollDown);
// document.getElementById("slider").style.marginLeft =
//   document.getElementById("tutorial").getBoundingClientRect().left + "px";

// console.log();

$(document).ready(function () {
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

  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 20,
    dots: true,
  });
});
