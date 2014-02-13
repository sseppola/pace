Tasks = new Meteor.Collection('tasks');

// This should eventually only subscribe to tasks accessible to the current user

Meteor.methods({
	createTask: function (taskAttributes) {
		
		if (!taskAttributes.title)
			throw new Meteor.Error(422, "The task needs a title");

		var newTask = {
			title: taskAttributes.title,
			priority: null,
			completed: false,
			accepted_date: null,
			created_date: new Date().getTime(),
			projectId: taskAttributes.projectId
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