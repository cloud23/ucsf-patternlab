$(function(){

	$search = $('input[name="search"]'),
	$parent = $search.parent(),
	$placeholder = $parent.find('.placeholder'),
	$defaultText = $placeholder.data('default-text');;

	$search.on({
		focusin: function(e){
			e.preventDefault();
			var val = $(this).val();
			if( '' != val) {
				 return;
			}

			$placeholder.empty();
		},
		focusout: function(e) {
			e.preventDefault();
			var val = $(this).val();
			if( '' != val) {
				 return;
			}

			$placeholder.text($defaultText);
		}
	});

	// Advanced Form
	$label = $('.search-advanced-form label'),
	$radioAll = $('.search-advanced-form .radio-circle'),

	$label.on({
		mouseenter: function(e) {
			toggleRadioHover($(this), 'label', 'add');
		},
		mouseleave: function(e) {
			toggleRadioHover($(this), 'label', 'remove');
		}
	})

	$radioAll.on({
		mouseenter: function(e) {
			toggleRadioHover($(this), 'radio-circle', 'add');
		},
		mouseleave: function(e) {
			toggleRadioHover($(this), 'radio-circle', 'remove');
		}
	})

	function toggleRadioHover(selector, elementCall, action) {
		if ( action == 'add' ) {
			if ( elementCall == 'label' ) {
				selector.addClass('hover');
				selector.prev().addClass('hover');
			} else if ( elementCall == 'radio-circle' ) {
				selector.addClass('hover');
				selector.next().addClass('hover');
			}
		} else if ( action == 'remove' ) {
			if ( elementCall == 'label' ) {
				selector.removeClass('hover');
				selector.prev().removeClass('hover');
			} else if ( elementCall == 'radio-circle' ) {
				selector.removeClass('hover');
				selector.next().removeClass('hover');
			}
		}
	}

	$label.on('click',function(e){
		e.preventDefault();
		$selectedRadio = $(this).prev();
		toggleRadioCheck( $selectedRadio );
	});

	$radioAll.on('click',function(e){
		e.preventDefault();
		$selectedRadio = $(this);
		toggleRadioCheck( $selectedRadio );
	});

	function toggleRadioCheck(selector) {

		if(selector.hasClass('checked')) {
			return;
		}

		$radioAll.removeClass('checked');
		$radioAll.find('input[type="radio"]').attr('checked',false);
		selector.addClass('checked');
		selector.find('input[type="radio"]').attr('checked',true);
	}

	$advancedFormToggle = $('.search-advanced-form-toggle, .advanced-form-close-button');
	$searchAdvancedForm = $('.search-advanced-form');
	$advancedFormToggle.on('click', function(e){
		e.preventDefault();
		$searchAdvancedForm.toggleClass('open');
	});

});
