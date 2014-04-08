

Template.taskList.helpers({
	tasks: function () {
		var startOfDay = new Date().setHours(0,0,0,0);
		var endOfDay = new Date().setHours(23,59,59,999);
		return {
			p1: Tasks.findOne({priority: 1, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			p2: Tasks.findOne({priority: 2, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			p3: Tasks.findOne({priority: 3, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			secondary: Tasks.find({priority: null, accepted_time: {$gte: startOfDay, $lt: endOfDay} })
		}
	},
	n_secondary: function () {
		return Tasks.find({priority: null, accepted_time: {$gte: Template.taskList.start, $lt: Template.taskList.end} }).count();
	}
});

Template.taskList.rendered = function () {
	$('#taskList .taskDrop').droppable({
		drop: function (event, ui) {
			var id = Session.get('draggedTask'),
				priority = null,
				$target = $(this);

			if ($target.hasClass('priority-1'))
				priority = 1;
			else if ($target.hasClass('priority-2'))
				priority = 2;
			else if ($target.hasClass('priority-3'))
				priority = 3;
			else if ($target.hasClass('priority-secondary'))
				priority = 'secondary';
			else if ($target.hasClass('secondary-title'))
				priority = 'secondary';

			if (priority) {
				Meteor.call('addTask', id, priority, function (error) {
					if (error)
						alert(error.reason);
				});	
			}
		}
	});
}