Template.projectTemplate.helpers({
	tasks: function () {
		return Tasks.find({projectId: this._id, completed: false});
	}
});