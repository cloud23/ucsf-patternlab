$(function(){
    // Funding priorities section
    var windowWidth = $(window).width();
    var slidesToShow;
    var $fundingPrioritiesItems = $('#fundingPrioritiesItems');

    if(windowWidth >= 1300){
        slidesToShow = 4;
    }
    else if(windowWidth >= 1024){
        slidesToShow = 3;
    }

    $fundingPrioritiesItems.slick({
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: "<button type=\"button\" class=\"slick-prev\"><span class=\"fa fa-angle-left\"></span></button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\"><span class=\"fa fa-angle-right\"></span></button>",
        responsive:[
            {
                breakpoint: 320,
                settings: "unslick"
            },
            {
                breakpoint: 1023,
                settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false }
            },
            {
                breakpoint: 1084,
                settings: {slidesToShow: 3, slidesToScroll: 1, arrows: true}
            },
            {
                breakpoint: 1199,
                settings: { slidesToShow: 4, slidesToScroll: 1, arrows: false }
            },
            {
                breakpoint: 1299,
                settings: { slidesToShow: 4, slidesToScroll: 1, arrows:true }
            }

        ]
    });

    $(window).resize(function(){
        var $windowWidth = $(window).width();
        if ($windowWidth >= 1024 && !$fundingPrioritiesItems.hasClass('slick-initialized') && !$fundingPrioritiesItems.hasClass('slick-slider')) {
            $('#fundingPrioritiesItems').slick('reinit');
        }
    });
});
