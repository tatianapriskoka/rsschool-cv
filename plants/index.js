const nav = document.querySelector('.nav-toggle');
const menu = document.querySelector('header__nav');
nav.addEventListener('click', () => {
    console.log(1);
    menu.classList.toggle('active')
});