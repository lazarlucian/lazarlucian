jQuery(document).ready(function ($) {

	function CloseNav() {
		$(".navbar-collapse").stop().css({ 'height': '1px' }).removeClass('in').addClass("collapse");
		$(".navbar-toggle").stop().removeClass('collapse');
	}

	$("html").click(function (event) {
		console.log("ev: " + event);
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {
			CloseNav();
		}

	});

});