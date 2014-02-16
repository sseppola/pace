// check that the user is a member of the project the task is contained in
memberOfTaskProject = function (userId, task) {
	if (task && Projects.findOne({projectId: task.projectId, members: userId}))
		return true;
	else 
		return false;
}
// check that the user is a member of the project
memberOfProject = function (userId, project) {
	if (project && Projects.findOne({projectId: project._id, members: userId}))
		return true;
	else
		return false;
}
isLoggedIn = function (userId, doc) {
	return userId === Meteor.userId();

}