$(function(){
	var $blockCarouselMobile = $('.block--article-carousel.mobile-block'),
		$blockCarouselDesktop = $('.block--article-carousel.desktop-block'),
		$window = $(window),
		windowWidth = $window.width();

	var articleEvents = {
		init: function() {
			this.toggleSlick();
			this.windowResize();
		},
		toggleSlick: function() {
			var $itemMobile = $blockCarouselMobile.find('.item');
			var $itemDesktop = $blockCarouselDesktop.find('.item');
			if( $itemMobile.length > 0 && $itemDesktop.length > 0 ) {
				this.slickIt();
			}
		},
		slickIt: function() {
			windowWidth = $window.width();
			if($blockCarouselMobile.hasClass('slick-initialized')) $blockCarouselMobile.slick('unslick');
			if($blockCarouselDesktop.hasClass('slick-initialized')) $blockCarouselDesktop.slick('unslick');
			if(windowWidth <= 767) {
				$blockCarouselMobile.slick(this.slickSettings('.block--article-carousel.desktop-block', true));
				$blockCarouselDesktop.slick(this.slickSettings('.block--article-carousel.mobile-block', false));
			} else {
				$blockCarouselMobile.slick(this.slickSettings('.block--article-carousel.desktop-block', false));
				$blockCarouselDesktop.slick(this.slickSettings('.block--article-carousel.mobile-block', true));
			}
		},
		slickSettings: function(navFor, showArrows) {
			return {
				arrows: showArrows,
				dots: false,
				infinite: false,
				adaptiveHeight: true,
				touchMove: false,
				swipe: false,
				swipeSlide: false,
				prevArrow: "<button type=\"button\" class=\"slick-prev carousel-nav\"><span class=\"fa fa-angle-left\"></span></button>",
				nextArrow: "<button type=\"button\" class=\"slick-next carousel-nav\"><span class=\"fa fa-angle-right\"></span></button>",
				asNavFor: navFor
			};
		},
		windowResize: function(){
			var aEvents = this;
			$(window).on('resize',function(){
				aEvents.toggleSlick();
			});;
		}
	};

	if($blockCarouselMobile.length > 0 && $blockCarouselDesktop.length > 0) articleEvents.init();
});
