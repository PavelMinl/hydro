
$(document).ready(function() {
    var $listItems = $(".pagination ul li");
    var $activeItem = $(".pagination ul li a.active");
    var activeIndex = $listItems.index($activeItem.parent());
    var maxVisibleItems = $(window).width() < 1100 ? 3 : 5;
    var startIndex = Math.max(0, activeIndex - Math.floor(maxVisibleItems / 2));
    var endIndex = Math.min(startIndex + maxVisibleItems - 1, $listItems.length - 1);

    $listItems.hide();
    $listItems.slice(startIndex, endIndex + 1).show();

    if (endIndex < $listItems.length - 1) {
        $("<li class='pagination__next'><a href='#'>Следующий<img src='img/vectorRight.svg'></a></li>").insertAfter($listItems.eq(endIndex));
    }
});