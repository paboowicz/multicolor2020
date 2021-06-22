$(document).ready(() => {


    $('.menu-toggle-button').click((button) => {
        const menu = $('.header-global .menu');


        if($(menu).hasClass('active')) {
            $(menu).removeClass('active');
            $('.header-global .logo').removeClass('fixed-logo');
            $('body').css('overflow', 'unset');
        }
        else {
            $('.header-global .menu-toggle-button').addClass('fixed-button');
            $(menu).addClass('active');
            $('.header-global .logo').addClass('fixed-logo');
            $('body').css('overflow', 'hidden');
        }
    });


    $('.home-index .slider-row').slick({
        adaptiveHeight: true,
        autoplay: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            },
        ]
    });


    $('.labels48h-index .slider-row').slick({
        adaptiveHeight: true,
        autoplay: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false
                }
            },
        ]
    });





    resizeHomeHeader();
    toggleMenuButtonPosition();

});



$(window).resize(() => {
    resizeHomeHeader();
    toggleMenuButtonPosition();
});



$(window).scroll(() => {
    toggleMenuButtonPosition();
});


function resizeHomeHeader() {
    const headerGlobalHeight = $('.header-global').outerHeight();
    const windowHeight = $(window).outerHeight();
    $('.home-index .slider-row').css('height', windowHeight - headerGlobalHeight);
}


let baseMenuToggleButtonPosition = null;
function toggleMenuButtonPosition() {
    if($(window).outerWidth() <= 1260) {
        const button = $('.header-global .menu-toggle-button');

        if(baseMenuToggleButtonPosition === null)
            baseMenuToggleButtonPosition = $('.header-global .menu-toggle-button').first().offset().top;

        if(!$(button).hasClass('fixed-button')) {
            if($(window).scrollTop() >= $(button).first().offset().top) {
                $(button).addClass('fixed-button');
            }
        }
        else {
            if($(window).scrollTop() <= baseMenuToggleButtonPosition) {
                $(button).removeClass('fixed-button');
            }
        }
    }
    else {
        $('.header-global .menu-toggle-button').removeClass('fixed-button');
    }
}



function setActiveMenuItem(page_name) {
    $('.header-global .menu ul li').removeClass('active');
    $('.header-global .menu').find('#' + page_name).addClass('active');
    console.log($('.header-global .menu').find('#' + page_name));
}

