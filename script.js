//toggler method 1

const menuIcon = document.querySelector('.ham');
const navBar = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change')
});


//toggler method 2
// $(document).ready(function(){
//     $('.ham').click(function(){
//         $('.nav-links').toggleClass('change')
//     })
// })

