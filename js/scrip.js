
const swiper = new Swiper('.swiper', {
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
