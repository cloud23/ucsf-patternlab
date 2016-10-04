$(function(){
	var $masonryContainer = $('.masonry-wrapper .masonry-results');
	var masonrySettings = {
		"isFitWidth": false,
		"percentPosition": true,
		"columnWidth": ".masonry-sizer",
		"isInitLayout": false,
		itemSelector: '.masonry-wrapper .masonry-results li'
	};


	$masonryContainer.masonry(masonrySettings);
	$masonryContainer.imagesLoaded(function(){
		$masonryContainer.masonry(masonrySettings);
	});

});
