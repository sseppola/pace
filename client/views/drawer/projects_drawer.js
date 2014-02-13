Template.projectsDrawer.events({
	'click .tag': function () {
		var $d = $('.drawer');
		if ($d.hasClass('open')) {
			console.log("closing");
			$d.removeClass('open').addClass('closed');
		} else {
			console.log("opening");
			$d.removeClass('closed').addClass('open');
		}
	}
});