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



const toggle = () => {
  const burger = document.querySelector("#ham");
  const nav = document.querySelector(".nav");
  const close = document.querySelector(".close-nav");
  const navItems = document.querySelectorAll('.nav__item')
  
  burger.addEventListener("click", () => {
    nav.classList.add("show");
  });

  for (const navItem of navItems){
    navItem.addEventListener('click', () => {
      nav.classList.remove('show')
    })
  }
};
toggle();


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
