'use sctict'

var menuOpen = document.querySelector('.header__open');
var menu = document.querySelector('.header__nav-block');
var menuOpenIcon = menuOpen.querySelector('.header__open-icon');

menuOpen.addEventListener('click', function () {
    menu.classList.toggle('header__nav-block_active');
    menuOpenIcon.classList.toggle('header__open-icon_active');
})


