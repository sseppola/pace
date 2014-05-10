Template.borderMenu.helpers({
	open: function(e) {
		var state = Session.get('borderMenuOpen');
		if (typeof state === 'undefined') {
			state = false;
			Session.set('borderMenuOpen', state);
		}
		return state;
	}
})

Template.borderMenu.events({
	'click .bt-overlay': function (e) {
		Session.set('borderMenuOpen', false);
	}
});