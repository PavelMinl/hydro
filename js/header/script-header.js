$(document).ready(function() {
    $('.header__mobile--language').click(function() {
        if ($(window).width() < 1100) {
            $(this).siblings('.header__mobile--change').toggle();
        }
    });
});