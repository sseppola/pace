Template.projectsDrawer.events({
	'click .tag': function () {
		var $d = $('.drawer');
		if ($d.hasClass('open')) {
			Session.set('drawerState', 'closed');
			$d.removeClass('open').addClass('closed');
			$('#header').removeClass('hide');
		} else {
			Session.set('drawerState', 'open');
			$d.removeClass('closed').addClass('open');
			$('#header').addClass('hide');
		}
	}
});

Template.projectsDrawer.rendered = function () {
	var state = Session.get('drawerState');
	if (!state)
		Session.set('drawerState', 'closed');

	$('.drawer').removeClass('open closed').addClass(Session.get('drawerState'));
};