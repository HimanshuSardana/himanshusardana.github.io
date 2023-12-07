const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function addDarkmodeWidget() {
  new Darkmode({ label: "🌙" }).showWidget();
}
window.addEventListener("load", addDarkmodeWidget);

// typewriter effect
var app = document.getElementById("description");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});

typewriter
  .typeString("Software Engineer")
  .pauseFor(1000)
  .deleteChars(17)
  .typeString("UI/UX Designer")
  .pauseFor(1000)
  .deleteChars(14)
  .typeString("Web Developer")
  .pauseFor(1000)
  .start();
