let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () => {
//     themeToggler.classList.toggler('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')) {
//         document.body.classList.add('active');

//     }
//     else{
//         dcument.body.classList.remove('active');
//     }
// }


// var menuBtn = document.getElementById("menuBtn");
// var menu = document.getElementById("menu");

// menuBtn.addEventListener("click", function() {
//   menu.classList.toggle("open");
// });
