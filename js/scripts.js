'use sctict'

var menuOpen = document.querySelector('.header__open');
var menu = document.querySelector('.header__nav-block');
var menuOpenIcon = menuOpen.querySelector('.header__open-icon');

menuOpen.addEventListener('click', function () {
    menu.classList.toggle('header__nav-block_active');
    menuOpenIcon.classList.toggle('header__open-icon_active');
})

 if (document.body.clientWidth >= 768) {
        var slider = document.querySelector('.faq > .swiper-container');
        var swiperWrapper = slider.querySelector('.swiper-wrapper');
        
        slider.classList.remove('swiper-container');
        swiperWrapper.classList.remove('swiper-wrapper');
        swiperWrapper.classList.add('review__desctop-slider');

        for (var i = 0; i < swiperWrapper.children.length; i ++) {
            swiperWrapper.children[i].className = '';
            swiperWrapper.children[i].style = null;

        }
    }


