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

// IntersectionObserver
const targets = document.querySelectorAll(".animate");

const lazyLoad = (target) => {
	const io = new IntersectionObserver(
		(entries, observer) => {
			console.log(entries);

			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.classList.add("fade");

					observer.disconnect();
				}
			});
		},
		{
			threshold: 1,
		}
	);
	io.observe(target);
};

targets.forEach(lazyLoad);

//preloader
function preload() {
	const body = document.querySelector("body");
	body.classList.add("loading");
	myVar = setTimeout(showPage, 4300);
}

function showPage() {
	const body = document.querySelector("body");
	document.querySelector(".spinner-wrapper").style.opacity = 0;
	document.querySelector(".spinner-wrapper").style.zIndex = 0;
	document.querySelector(".container").style.opacity = 1;
	document.querySelector(".container").style.zIndex = 1;
	body.classList.remove("loading");
}
