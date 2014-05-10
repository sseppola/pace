

Template.taskList.helpers({
	drawerOpen: function () {
		return !Session.get('isDrawerOpen');
	},
	tasks: function () {
		var startOfDay = new Date().setHours(0,0,0,0);
		var endOfDay = new Date().setHours(23,59,59,999);

		return {
			p1: Tasks.findOne({priority: 1, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			p2: Tasks.findOne({priority: 2, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			p3: Tasks.findOne({priority: 3, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			secondary: Tasks.find({priority: null, accepted_time: {$gte: startOfDay, $lt: endOfDay} }),
			number_of_secondary: Tasks.find({priority: null, accepted_time: {$gte: startOfDay, $lt: endOfDay} }).count()
		}
	}
});

Template.taskList.rendered = function () {
	$('#taskList .taskDrop').droppable({
		drop: function (event, ui) {
			var id = Session.get('draggedTask'),
				priority = null,
				$target = $(this);

			priority = $target.attr('data-priority');
			console.log("task dropped, id: " + id);
			console.log("priority: " + priority);

			if (priority != 'secondary' && isNaN(priority) ) {
				// not secondary, and not a number, error
				console.error("Not a valid drop");
				return;
			}

			if (!isNaN(priority))
				priority = parseInt(priority)   // is numeric
			
			Meteor.call('addTask', id, priority, function (error) {
				if (error)
					alert(error.reason);

			});	
		}
	});
}