// --------------------------------------
// 		projectTaskTemplate template
// --------------------------------------

Template.singleTask.helpers({
	projectName: function () {
		var project = Projects.findOne({_id: this.projectId});
		project = Projects.findOne({_id: this.projectId});

		// Important when db is not ready
		return project && project.name;
	},
	remainingEstimate: function () {
		return "30m estimated";
	}
});

Template.singleTask.events({
	'click .checkbox': function (e) {
		e.preventDefault();
		var newState = !this.completed;
		
		Meteor.call('updateCompletion', this._id, newState, function (error) {
			// check for ownership
			if (error) alert(error.reason);
		});
	}
});