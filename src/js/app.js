// hamburger menu
const menu = document.querySelector('.menu input');
const nav = document.querySelector('.top-nav ul');

menu.addEventListener('click', () => {
    nav.classList.toggle('popup');
} );

// preloader
const preloader = document.getElementById('preload');

window.addEventListener('load', () => {
    setTimeout(() => { 
        preloader.style.display = 'none';
    }, 700);
});

// scroll down
const scrollDown = document.querySelector('.btn');

scrollDown.addEventListener('click', () => {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    });
});



