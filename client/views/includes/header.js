Template.header.helpers({
	estimatedRun: function () {
		var tasks = Tasks.find({accepted_date: PaceHelper.todayString()}).fetch();
		var time = 0;

		// timeEstimate is in minutes
		for (var i=0; i < tasks.length; i++) {
			time += tasks[i].timeEstimate;
		}
		time = 68;
		var timeUntil;

		if (time == 0) {
			timeUntil = 'Nothing planned';
		} else if (time < 60) {
			timeUntil = Math.round(moment.duration(time, 'm').asMinutes() * 10)/10;
			timeUntil += ' Minutes left';
		} else {
			timeUntil = Math.round(moment.duration(time, 'm').asHours() * 10)/10;
			timeUntil += ' Hours left';
		}
		 
		return timeUntil;
	},
	progress: function () {
		return 0.25;
	}
});

Template.header.events({
	'click .bt-menu-trigger': PaceHelper.openBorderMenu,
	'click #newTaskBtn': function () {
		console.log("Creating new task");
	}
});