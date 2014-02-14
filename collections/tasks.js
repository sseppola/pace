Tasks = new Meteor.Collection('tasks');

// This should eventually only subscribe to tasks accessible to the current user

Meteor.methods({
	createTask: function (taskAttributes) {
		
		if (!taskAttributes.title)
			throw new Meteor.Error(422, "The task needs a title");

		var newTask = {
			title: taskAttributes.title,
			// owner: Meteor.userId(), // check if the call is the correct method
			priority: null,
			completed: false,
			accepted_date: null,
			created_date: new Date().getTime(),
			projectId: taskAttributes.projectId,
			timeEstimate: taskAttributes.timeEstimate
		}

		var id = Tasks.insert(newTask);
	},
	updateCompletion: function (id, state) {
		// check for ownership
		Tasks.update(id, {
			$set: {completed: state}
		});
	}
});