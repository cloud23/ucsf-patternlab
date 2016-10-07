$(function(){

	var $window = $(window),
		$shareBlck = $('.block--share-btns'),
		$contentArea = $('.content-area'),
		$nav = $('.nav--wrapper'),
		$hero = $('.block--story-detail-hero');

	var threshold,
		calculatedThreshold,
		offsetLeft;

	var snsEvents = {
		init: function() {
			this.scrollEvent();
			this.resizeEvent();

		},
		scrollEvent: function() {
			$window.on('scroll',function(){
				var scrollTop = $(this).scrollTop();
				maxThreshold = $nav.height()+$hero.height(),
				calculatedThreshold = threshold,
				offsetLeft = $contentArea.offset().left-30;
				if(scrollTop >= calculatedThreshold) {
					$shareBlck.addClass("followScroll").css(
						{
							"left" : offsetLeft+"px"
						}
					);

				} else {
					$shareBlck.removeClass("followScroll").removeAttr("style");
				}
			});
		},
		resizeEvent: function() {
			$window.on('resize',function(){
				maxThreshold = $nav.height()+$hero.height(),
				calculatedThreshold = threshold,
				offsetLeft = $contentArea.offset().left-30;
			});
		}
	};


	if($shareBlck.length > 0 ) {
		threshold = $nav.height()+$hero.height(),
		calculatedThreshold = threshold,
		offsetLeft = $contentArea.offset().left-30;

		if($window.width() >= 1024) snsEvents.init();
		$window.on('resize',function() {
			if($window.width() >= 1024) snsEvents.init();
			if($shareBlck.hasClass('followScroll')) {
				$shareBlck.removeClass('followScroll').removeAttr('style');
			}
		});
	}

});