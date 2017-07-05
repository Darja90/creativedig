$('document').ready(function() {
    $('.works-slider').slick({
        dots:true,
        slide: ('.works-slider-item'),
        prevArrow: ('.works-slider-arrow-left'),
        nextArrow: ('.works-slider-arrow-right'),
        appendDots: ('.works-slider-dots')
    });
    
    $('.team-slider').slick({
        slide: ('.team-slider-item'),
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
//        arrows: false,
        prevArrow: ('.team-slider-arrow__left'),
        nextArrow: ('.team-slider-arrow__right')
    });


});
    