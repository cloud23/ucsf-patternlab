$(function(){

	var $searchMobile = $("#searchMobile"),
	$parent = $searchMobile.parent(),
	$placeholder = $parent.find('.placeholder'),
	$defaultText = $parent.find('.default-text').text();

	// Advanced Form
	// $label = $('.mobile-search-advanced-form .mobile-search-option label'),
	var $radioAllMobile = $('.mobile-search-advanced-form .mobile-search-option');

	// Toggle buttons
	var $searchFormToggle = $('.mobile-search-form-toggle'),
	$searchForm = $('.nav-main-mobile-search');


	var mobileSearchEvents = {
		init: function() {
			this.toggleSearchForm();
			this.togglePlaceholder();
			this.toggleOptions();
		},
		toggleSearchForm: function() {
			$searchFormToggle.on('click', function(e) {

				e.preventDefault();
				$searchForm.toggleClass('open');

			});
		},
		togglePlaceholder: function() {

			$searchMobile.on({
				focusin: function(e) {
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

		},
		toggleOptions: function() {
			$radioAllMobile.on('click', function(e) {
				$radioAllMobile.find('.radio-circle').removeClass('checked').find('input[type="radio"]').attr('checked',false);
				$(this).find('.radio-circle').addClass('checked').find('input[type="radio"]').attr('checked',true);
			});
		}
	};

	mobileSearchEvents.init();
});
