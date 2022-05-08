var button4Top = document.querySelector(".goTopButton");

function goTop() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    button4Top.classList.add("active");
  } else {
    button4Top.classList.remove("active");
  }
});
function hideScroll() {
  document.body.style.overflow = "hidden";
}
hideScroll();

var loader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
  document.body.style.overflow = "visible";
});
