
$(document).ready(function(){
    $('#owl-carousel').owlCarousel({
        loop:false,
        items:3,
        margin:10,
        nav:false,
        dots: false,
        mouseDrag:true,
        touchDrag: true,
        center: true,

        responsive:{
            0:{
                items:1
            },
            2000:{
                items:1
            },

        }
    });});
