$(function() {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        dots: false,
        nav: false,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});