Template.projectsDrawer.events({
	'click .tag': function () {
		var $d = $('.drawer');
		if ($d.hasClass('open')) {
			Session.set('drawerState', 'closed');
			$d.removeClass('open').addClass('closed');
		} else {
			Session.set('drawerState', 'open');
			$d.removeClass('closed').addClass('open');
		}
		
	}
});

Template.projectsDrawer.rendered = function () {
	var state = Session.get('drawerState');
	if (!state)
		Session.set('drawerState', 'closed');

	$('.drawer').removeClass('open closed').addClass(Session.get('drawerState'));


	$('#projectsDrawer .task').draggable({ 
		helper: function () {
			// console.log(this);
			return $(this).clone().addClass('dragged-task');
		},
		appendTo: 'body',
		cursorAt: {
			top: 25
		}

	});
};