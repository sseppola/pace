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

		if (priority != null) {
			var oldTask = Tasks.findOne({priority: priority, accepted_date: PaceHelper.todayString()});

			if (oldTask) {
				Tasks.update(oldTask._id, {
					$set: {
						priority: null,
						accepted_date: null
					}
				});
			}	
		}
		

		Tasks.update(taskId, {
			$set: {
				priority: priority,
				accepted_date: PaceHelper.todayString()
			}
		});
	}
});