
$(document).ready(function () {

    $('.references-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        // arrows: false,
        nextArrow: $('.references-part-index .arrow-right')
    })

    $('.header-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
    })

    $('.header-part-index .menu li a').click(function () {
        const windowWidth = window.outerWidth;
        if(windowWidth < 1300)
            $('.nav-box').toggleClass('active');
        const link = $(this);
        $('.header-part-index .menu li').removeClass('active');
        link.parent().addClass('active');
    });

});



$("a[href='#start']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$("a[href='#o-nas']").click(function() {
    const headerRow = $('.header-part-index >.row').first().outerHeight();
    $("html, body").animate({ scrollTop: $('#o-nas').first().offset().top - headerRow }, "slow");
    return false;
});

$("a[href='#oferta']").click(function() {
    const headerRow = $('.header-part-index >.row').first().outerHeight();
    $("html, body").animate({ scrollTop: $('#oferta').first().offset().top - headerRow }, "slow");
    return false;
});

$("a[href='#kontakt']").click(function() {
    const headerRow = $('.header-part-index >.row').first().outerHeight();
    $("html, body").animate({ scrollTop: $('#kontakt').first().offset().top - headerRow }, "slow");
    return false;
});


function toggleMenu() {
    $('.nav-box').toggleClass('active');
}
