const tabLinks = document.querySelectorAll(".product__tabs a");
const tabPanels = document.querySelectorAll(".product__tabs--panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".product__tabs li.active").classList.remove("active");
        document.querySelector(".product__tabs--panel.active").classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}

const swiper = new Swiper('.swiper__detail', {
    // Optional parameters
    direction: 'horizontal',
    speed: 800,
    slidesPerView: 1,
    autoplay: {
        delay: 15000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            updateFractionPagination(this);
        },
        slideChange: function () {
            updateFractionPagination(this);
        },
    }
});

function updateFractionPagination(swiper) {
    var totalSlides = swiper.slides.length;
    var activeIndex = swiper.activeIndex + 1;
    var fractionText = '<span class="product__detail--index">' + activeIndex + '</span>' +' / ' + totalSlides;

    document.querySelector('.swiper-pagination--fraction').innerHTML = fractionText;
}