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
