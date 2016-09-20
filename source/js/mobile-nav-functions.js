$(function(){

	var $html =
	$('html'),
	$mobileMenuToggle = $('.mobile-menu-toggle'),
	$mobileLinksToggle = $('.nav-main-mobile ul li a, .nav-main-mobile ul li .display-arrow');

	var mobileNavEvents = {
		init: function(){
			this.menuToggle();
			this.linksToggle();
		},
		menuToggle: function() {
			// Menu Toggle
			$mobileMenuToggle.on('click', function(e){
				e.preventDefault();
				var $navMainMobile = $(this).parent().parent().parent().parent().parent().parent().find('.nav-main-mobile');
				$navMainMobile.toggleClass('open');

				if($(this).hasClass('active')) {
					$navMainMobile.attr('aria-hidden',false);
					$html.addClass('mobile-nav-open');
				} else {
					$navMainMobile.attr('aria-hidden',true);
					$html.removeClass('mobile-nav-open');
				}
			});
		},
		linksToggle: function() {
			// Links Toggle
			$mobileLinksToggle.on('click', function(e) {
				e.preventDefault();
				$this = $(this),
				$parent = $this.parent(),
				$popupState = $this.parent().attr('aria-haspopup');
				var link = $this.attr('href');

				if($parent.hasClass('active')) {
					$parent.removeClass('active').find('.display-arrow').removeClass('active').parent().find('.dropdown-menu').removeClass('open');

				} else {
					$mobileLinksToggle.parent().parent().find('.active').each(function(){
						$(this).removeClass('active').find('.display-arrow').removeClass('active').parent().find('.dropdown-menu').removeClass('open');
					});


					if( $this.parent().find('ul').length > 0 ) {
						$this.parent().toggleClass('active').find('.display-arrow').toggleClass('active').parent().find('.dropdown-menu').toggleClass('open');
					} else {
						window.location.href = link;
					}
				}
			} );
		}
	};

	if( $mobileMenuToggle.length > 0 ) mobileNavEvents.init();

});
