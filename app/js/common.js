$(function() {
    $('.slider').slick();

    $('.slider-partners').slick({
        infinite: true,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '15px',

        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                infinite: true,
                centerPadding: '10px'
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '0'
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '0'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '0'
            }
         }
        ]
    });

});
