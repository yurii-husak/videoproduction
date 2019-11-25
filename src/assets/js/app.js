import $ from 'jquery';
import 'what-input';
import './slick';

window.jQuery = $;

import Foundation from 'foundation-sites';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

$(document).foundation();


// Scroll
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    });

    $(".ba-header-scroll").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
    });
});


// Section one - slider
$('.ba-service-one-mobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
});

$('.ba-service-one-arrow-prev').on('click', function() {
    $('.ba-service-one-mobile').slick('slickPrev');
});
$('.ba-service-one-arrow-next').on('click', function() {
    $('.ba-service-one-mobile').slick('slickNext');
});

let currentSlide = $('.ba-service-one-mobile').slick('slickCurrentSlide') + 1;
//let slideCount = $(".ba-service-one-mobile").slick("getSlick").slideCount

$('.ba-service-one-arrows-text').text(currentSlide);

$(".ba-service-one-mobile").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".ba-service-one-arrows-text").text(currentSlide + 1);
});



// Partners slider
$('.ba-partners-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0 100px',
    prevArrow: '<button type="button" class="slick-prev"><img src="/assets/img/icons/last.png" alt="Prev" width="8px" height="12px"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/assets/img/icons/next.png" alt="Next" width="8px" height="12px"></button>',
    responsive: [
        {
            breakpoint: 1275,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});