
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
        // vertical: true,
    })

    // $('.header-part-index .menu li a').click(function () {
    //     const windowWidth = window.outerWidth;
    //     if(windowWidth < 1300)
    //         $('.nav-box').toggleClass('active');
    //     const link = $(this);
    //     $('.header-part-index .menu li').removeClass('active');
    //     link.parent().addClass('active');
    // });

});




$(".header-part-index .menu li#kontakt").click(function() {
    const headerRow = $('.header-part-index >.row').first().outerHeight();
    $("html, body").animate({ scrollTop: $('.footer-part-index').first().offset().top - headerRow }, "slow");

    console.log($('.header-part-index .menu li#kontakt').first().offset());

    $('.header-part-index .menu li').removeClass('active');
    $('.header-part-index .menu li#kontakt').addClass('active');

    return false;
});


function toggleMenu() {
    $('.nav-box').toggleClass('active');
}
