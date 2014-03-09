Template.taskList.helpers({
	p1: function () {
		return Tasks.findOne({priority: 1, accepted_date: PaceHelper.todayString()});
	},
	p2: function () {
		return Tasks.findOne({priority: 2, accepted_date: PaceHelper.todayString()});
	},
	p3: function () {
		return Tasks.findOne({priority: 3, accepted_date: PaceHelper.todayString()});
	},
	secondary: function () {
		return Tasks.find({priority: null, accepted_date: PaceHelper.todayString()});
	},
	n_secondary: function () {
		return Tasks.find({priority: null, accepted_date: PaceHelper.todayString()}).count();
	}
});

Template.taskList.rendered = function () {
	$('#taskList .task').droppable({
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

			if (priority) {
				Meteor.call('addTask', id, priority, function (error) {
					if (error)
						alert(error.reason);
				});	
			}
		}
	});
}