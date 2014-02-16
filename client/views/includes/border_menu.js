Template.borderMenu.rendered = function () {
	function init() {
		var $menu = $('#bt-menu'),
			$trigger = $('.bt-menu-trigger'),
			eventType = 'click', // mobilecheck() ? 'touchstart' : 'click',
			resetMenu = function () {
				$menu.removeClass('bt-menu-open').addClass('bt-menu-close');
			},
			closeClickFn = function (e) {
				resetMenu();
				$overlay.off(eventType, closeClickFn);
			};

		var $overlay = $(document.createElement('div'));
		$overlay.addClass('bt-overlay');
		$menu.append($overlay);

		$trigger.on(eventType, function (e) {
			e.stopPropagation();
			e.preventDefault();

			if ($menu.hasClass('bt-menu-open'))
				resetMenu();
			else {
				$menu.removeClass('bt-menu-close').addClass('bt-menu-open');
				$overlay.on(eventType, closeClickFn);
			}
		});
	}

	init();
};