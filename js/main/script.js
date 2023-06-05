
const swiper = new Swiper('.swiper__main', {
    // Optional parameters
    direction: 'horizontal',
    speed: 800,
    slidesPerView: 1,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function() {
    $('.header__mobile--language').click(function() {
        if ($(window).width() < 1100) {
            $('.header__mobile--change').toggle();
        }
    });
});