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
		},
		reinit: function(){
			$masonryContainer = $('body').find('.masonry-wrapper .masonry-results');
			if($masonryContainer.length > 0) this.renderMasonry();
		}
	};

	masonryEvents.init();
	reinitButtons();
	reinitSelect();

	$('select[name="category"]').each(function(){
		var $select = $(this);
		var $options = $(this).find('option');
		var $parent = $('body').find('.filters');
		var $wrapper = $('<ul class="category-nav" role="navigation"></ul>');
		var $itemWrapper = $('<li></li>');


		$options.each(function(){
			var $option = $(this);
			var text = $(this).text();
			var btnClass = text.toLowerCase();
				btnClass = 'btn--'+btn_class.replace(' ','-');
			var value = $(this).val();
			var $link = $('<a class="btn btn--category '+btnClass+'"></a>');
			var $new_link = $link.clone();
			var $list_wrapper = $itemWrapper.clone();
			$new_link.text(text).attr('href', $select.attr('name'));
			$list_wrapper.append($new_link);
			$wrapper.append($list_wrapper);
		});
		$parent.append($wrapper);
	});

	$('body').on('click', ".btn--category", function(e){
		e.preventDefault();
		var $this = $(this);
		var $select = $('body').find('select[name="category"]');
		var $options = $select.find('option');
		var index = $this.parent().index();
		var $option = $select.find('option').eq(index);

		$options.removeAttr('selected');
		$option.attr('selected', 'selected');
		$select.trigger('change');
		$(this).parent().parent().find('li').each(function(){
			$(this).find('.btn--category').removeClass('active');
		})
		$(this).addClass('active');

	});


	function reinitButtons(){
		$('body').find('.pager__item').find('a').on("click", function(e){
			setTimeout(function(){
				masonryEvents.reinit();
				reinitButtons();
			}, 1000);
		});
	}

	function reinitSelect(){
		$('body').on('change', 'select', function(){
			setTimeout(function(){
				masonryEvents.reinit();
				reinitSelect();
			}, 1000);
		});
	}


});
