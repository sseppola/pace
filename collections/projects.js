Projects = new Meteor.Collection('projects');

Projects.allow({
	insert: isLoggedIn,
	update: memberOfProject
});

Meteor.methods({
	createProject: function (projectAttributes) {
		if (!projectAttributes.name)
			throw new Meteor.Error(422, "Your project needs a name");
		
		var newProject = {
			name: projectAttributes.name,
			date_created: new Date().getTime(),
			owner: Meteor.userId(),
			members: [Meteor.userId()]
		}
		var id = Projects.insert(newProject);
	}
});