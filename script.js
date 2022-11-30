//preloader and pop-up text
window.onload = function () {
  document.querySelector(".loader-container").style.display = "none";
};

// Sticky Navbar
const navbar = document.querySelector("header");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
window.onscroll = navbarScroll;

// dark mode toggler
const buttonDarkMode = document.querySelector("#switch");

buttonDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("light");
  buttonDarkMode.classList.toggle("active");
});

// nav toggler
const toggle = () => {
  const burger = document.querySelector("#ham");
  const nav = document.querySelector(".nav");
  const close = document.querySelector("#close-nav");
  const navItems = document.querySelectorAll(".nav__item");

  burger.addEventListener("click", () => {
    nav.classList.add("show");
  });
  close.addEventListener("click", () => {
    nav.classList.remove("show");
  });

  for (const navItem of navItems) {
    navItem.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  }
};
toggle();

// slider
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActive();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActive();
});

function setActive() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
setActive();

function sendEmail() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "herroyalpianist@gmail.com",
    Password: "M0r3n/k3",
    To: "herroyalpianist@gmail.com",
    From: email,
    Subject: "New website Message from " + name,
    Body: message,
  }).then((message) => alert(message));
}

// import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

// neonCursor({
//   el: document.getElementById("home"),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025,
// });
