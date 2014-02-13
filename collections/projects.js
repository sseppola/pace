Projects = new Meteor.Collection('projects');

Meteor.methods({
	createProject: function (projectAttributes) {
		if (!projectAttributes.name)
			throw new Meteor.Error(422, "Your project needs a name");
		var newProject = {
			date_created: new Date().getTime(),
			name: projectAttributes.name
		}
		var id = Projects.insert(newProject);
	}
});