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
	'click .bt-content': function (e) {
		console.log("overlay click");
		Session.set('borderMenuOpen', false);
	}
});