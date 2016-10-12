jQuery(function($){
	var $masonryContainer = $('.masonry-wrapper .masonry-results');

	var masonryEvents = {
		init: function() {
			if($masonryContainer.length > 0) this.renderMasonry();
		},
		renderMasonry: function() {
			var settings = this.masonrySettings();
			$masonryContainer.masonry(settings);
			$masonryContainer.imagesLoaded(function(){
				$masonryContainer.masonry(settings);
			});
		},
		masonrySettings: function(){
			return {
				isFitWidth: false,
				percentPosition: true,
				columnWidth: ".masonry-sizer",
				isInitLayout: false,
				itemSelector: '.masonry-wrapper .masonry-results li'
			};
		}
	};

	masonryEvents.init();

});
