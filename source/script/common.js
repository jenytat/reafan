$(document).ready(function(){
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.header__menu').toggleClass('wrapper_opening');
        $('.open-menu').toggleClass('active');
        $('.m-menu').toggleClass('mm-wrapper_opening');
    });

    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label    = input.nextElementSibling,
            labelVal = label.innerHTML;
 
        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();
    
            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });

    var text = $('.title a').text();

    $('.title a').click(function(){

        if ($(this).text() === 'Свернуть') {
            $(this).text(text)
        } else {
            $(this).text('Свернуть')
        }
        $('.form-content').slideToggle(500);
    });

    $('.question__item h4').click(function () {
        $(".question__item p:visible").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown(200);
        }
    });

    $('.visa__title').click(function () {
        $(".visa__answer:visible").slideUp();
        $('img').removeClass('active');
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown(200);
            $(this).find('img').addClass('active');
        }
    });

    $('.mm-listitem span').click(function () {
        $(".mm-listitem ul:visible").slideUp();
        $('svg').removeClass('active');
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown(200);
            $(this).find('svg').addClass('active');
        }
    });

    $('.info__slider_wrap').on('init', function(event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });

    $('.footer__slider_wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 1012,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 745,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

