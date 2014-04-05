Template.taskList.helpers({
	p1: function () {
		return Tasks.findOne({priority: 1});
	},
	p2: function () {
		return Tasks.findOne({priority: 2});
	},
	p3: function () {
		return Tasks.findOne({priority: 3});
	},
	secondary: function () {
		return Tasks.find({priority: null});
	},
	n_secondary: function () {
		return Tasks.find({priority: null}).count();
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