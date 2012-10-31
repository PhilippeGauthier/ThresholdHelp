$(document).ready( function () {
	$('.intro-nav').scrollspy();

	$('#mobile-select').change ( function () {
		window.location = $(this).val();
	})

	if (window.pageYOffset > 90) {
		$('#sidebar').addClass('affix-top');
	}
})

$(window).resize( function () {
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	});
})

$(window).scroll( function () {
	if (window.pageYOffset > 90) {
		$('#sidebar').addClass('affix-top');
	}
	else {
		$('#sidebar').removeClass('affix-top');
	}
})