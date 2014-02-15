Meteor.publish('tasks', function () {
	var projects = Projects.find({members: this.userId});
	var projectIds = projects.map(function (project, index, cursor) {
		return project._id;
	});
	
	return Tasks.find({projectId: {$in: projectIds}});
});

Meteor.publish('projects', function () {
	return Projects.find({members: this.userId});
});
