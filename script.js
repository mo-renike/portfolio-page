//toggler method 1

// const menuIcon = document.querySelector('#ham');
// const navBar = document.querySelector('.nav-links');

// menuIcon.addEventListener('click', () => {
//     navBar.classList.toggle('show')
// });

//toggler method 2

// $(document).ready(function(){
//     $('#ham').click(function(){
//         $('#ham').toggleClass('show')
//     })
// })

//toggler method 3

const toggle = () => {
  const burger = document.querySelector("#ham");
  const nav = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll('.nav-item')
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
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
