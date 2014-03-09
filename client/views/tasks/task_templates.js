Template.singleTask.helpers({
	projectName: function () {
		var id = this.projectId;
		var project = Projects.findOne({_id: id});
		return project.name;
	}
});

Template.singleTask.events({
	'click input[type=checkbox]': function (e) {
		e.preventDefault();

		var newState = false;
		if ($(e.target).is(':checked'))
			newState = true;
		
		Meteor.call('updateCompletion', this._id, newState, function (error) {
			// check for ownership
			if (error)
				alert(error.reason);
		});
	},
	'click .checkbox': function (e) {
		e.preventDefault();

		var $t = $(e.target).parents('.task');
		var newState = false;

		if ($t.hasClass('completed-false'))
			newState = true;
		
		Meteor.call('updateCompletion', this._id, newState, function (error) {
			// check for ownership
			if (error)
				alert(error.reason);
		});
	}
});