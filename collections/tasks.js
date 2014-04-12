Tasks = new Meteor.Collection('tasks');

Tasks.allow({
	insert: memberOfTaskProject,
	update: memberOfTaskProject
});

Meteor.methods({
	createTask: function (taskAttributes) {
		
		if (!taskAttributes.title)
			throw new Meteor.Error(422, "The task needs a title");

		// pick the data from the attributes we want
		var newTask = _.extend(_.pick(taskAttributes, 'title', 'projectId', 'timeEstimate'), {
			// owner: Meteor.userId(), // check if the call is the correct method
			priority: null,
			completed: false,
			accepted_date: null,
			created_date: new Date().getTime(),
		});

		var id = Tasks.insert(newTask);
	},
	updateCompletion: function (id, state) {
		Tasks.update(id, {
			$set: {completed: state}
		});
	},
	addTask: function(taskId, priority) {
		if (priority == 'secondary')
			priority = null;

		var startOfDay = new Date().setHours(0,0,0,0);
		var endOfDay = new Date().setHours(23,59,59,999);

		if (priority != null) {
			console.log("Attempting to remove old task, if any");

			var oldTask = Tasks.findOne({priority: priority, accepted_time: {$gte: startOfDay, $lt: endOfDay} });

			if (oldTask) {
				Tasks.update({ _id: oldTask._id }, {
					$set: {
						priority: null,
						accepted_time: null
					}
				});
			}	
		}
		
		console.log("Updating dropped task with id: " + taskId + "  to priority: " + priority);

		Tasks.update({ _id: taskId }, {
			$set: {
				priority: priority,
				accepted_time: new Date().getTime()
			}
		});
	}
});