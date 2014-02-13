Template.projectCreate.helpers({
	createNewProject: function () {
		return Session.get('createNewProject') === true;
	}
});

Template.projectCreate.events({
	'click .newProjectTrigger': function () {
		Session.set('createNewProject', true);
	},
	'submit form': function (e) {
		e.preventDefault();
		var project = {
			name: $(e.target).find('[name=projectName]').val()
		}

		Meteor.call('createProject', project, function (error, id) {
			if (error)
				alert(error.reason);
			else
				Session.set('createNewProject', false);
		});
	}
});