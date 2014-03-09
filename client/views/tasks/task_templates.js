Template.singleTask.helpers({
	projectName: function () {
		var project = Projects.findOne({_id: this.projectId});
		project = Projects.findOne({_id: this.projectId});

		if (project == undefined)
			// console.log("damn");
		// return project.name;	
	
		// The problem here seems to be that project returns as undfined on the first call
		// to the database. The id is right.
		
		return "Project Name";
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