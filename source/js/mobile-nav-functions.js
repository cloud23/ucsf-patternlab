$(function(){

	$mobileMenuToggle = $('.mobile-menu-toggle'),
	$mobileLinksToggle = $('.nav-main-mobile ul li a, .nav-main-mobile ul li .display-arrow'),
	$navMainMobile = $('.nav-main-mobile');

	$mobileMenuToggle.on('click', function(e){
		e.preventDefault();
		$navMainMobile.toggleClass('open');

		if($(this).hasClass('active')) {
			$navMainMobile.attr('aria-hidden',false);
		} else {
			$navMainMobile.attr('aria-hidden',true);
		}
	});

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
});
