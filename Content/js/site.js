jQuery(document).ready(function ($) {
	/* collapse navbar */
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
	/* end */
	/* slide effect */
	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				/* collapse navbar */
				var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse in");
				if (_opened === true) {
					CloseNav();
				}
				/* end collapse*/
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);


				return false;

			}
		}
	});

});