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
	}
});