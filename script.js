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

const toggle = () =>{
    const burger = document.querySelector('#ham');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () =>{
        nav.classList.toggle('show');
    })
}
toggle(); 

