let nav = document.querySelector('.nav-toggle');
let menu = document.querySelector('.header__nav');
nav.addEventListener('click', function () {
    menu.classList.toggle('active');
});