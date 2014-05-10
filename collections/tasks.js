Tasks = new Meteor.Collection('tasks');

Tasks.allow({
	insert: memberOfTaskProject,
	remove: memberOfTaskProject,
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
	deleteTask: function (task) {
		console.log(task);
		
		if (!task._id)
			throw new Meteor.Error(422, "The task needs an id");
		
		var dbtask = Tasks.findOne({_id: task._id});
		
		if (!dbtask)
			throw new Meteor.Error(422, "No task by that Id");

		Tasks.remove(task._id);
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
		
		Tasks.update({ _id: taskId }, {
			$set: {
				priority: priority,
				accepted_time: new Date().getTime()
			}
		});
	}
});