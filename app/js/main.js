$(function () {

    $(window).scroll(function () {

        if($(window).scrollTop()>120){
            $('.header-top').addClass('header-small');
        } else {
            $('.header-top').removeClass('header-small');}

        if($(window).scrollTop()+$(window).height()>=$(document).height()-($('.header-footer-part').height() + $('.footer__bottom-block').height())){
            $('.header-top').addClass('header-hide');
        } else {
            $('.header-top').removeClass('header-hide');}
    });

    $('.header__menu-btn-hidden-block').click( function () {
        // $(this).toggleClass('active');
        $('.header__menu-btn-hidden').toggleClass('active');
        $('.header-menu-hidden').toggleClass('active');
    });

    var param = [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ],
        settings = {
                touchThreshold: 5,
                dots: false,
                infinite: true,
                slidesToShow: 4,
                appendArrows: '.main-slider__ars',
                prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Previous"><span class="main-slider-arrow-prev"></span></button>',
                nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Next"><span class="main-slider-arrow-next"></span></button>',
                responsive: param
        };

    settings.appendArrows = '.main-slider__ars';
    $('.main-slider').slick(settings);

    settings.appendArrows = '.second-slider__ars';
    $('.second-slider').slick(settings);

    $('.top-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 7000,
        appendArrows: '.hero__ars',
        prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Previous"><span class="top-slider-arrow-prev"></span></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Next"><span class="top-slider-arrow-next"></span></button>'
    });

});

























