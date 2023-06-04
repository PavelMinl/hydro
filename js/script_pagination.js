$(document).ready(function() {
    if ($('.pagination ul li:nth-child(6)').length) {
        $('.pagination ul li:nth-child(4)').after('<li class="pagination__ellipsis"><div>...</div></li>');
        $('.pagination ul li:nth-child(n+6):not(:last-child)').remove();
    }
    $('.pagination').css('display', 'block');
});
