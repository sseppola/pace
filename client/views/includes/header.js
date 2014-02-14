Template.header.helpers({
	displayDate: function () {
		var d = new Date();
		return "Friday 14.February";
	},
	estimatedRun: function () {
		var tasks = Tasks.find({accepted_date: PaceHelper.todayString()}).fetch();
		var time = 0;
		for (var i=0; i < tasks.length; i++) {
			time += tasks[i].timeEstimate;
		}
		
		var min = PaceHelper.pluralize(time % 60, "Minute"),
			hrs = PaceHelper.pluralize(time / 60, "Hour");
		
		if (hrs !== "" && min !== "")
			return hrs + " and " + min + " of work esitmated";
		else if (hrs !== "" && min === "")
			return hrs + " of work estimated";
		else if (hrs === "" && min !== "")
			return min + " of work estimated";
		else 
			return "No work planned yet";
	}
});