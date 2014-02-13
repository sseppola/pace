Template.projectTemplate.helpers({
	tasks: function () {
		return Tasks.find({projectId: this._id, completed: false});
	},
	creatingNewTask: function () {
		return Session.get('newTask-'+this._id);
	}
});

Template.projectTemplate.events({
	'click .newTaskTrigger': function () {
		Session.set('newTask-'+this._id, true);
	},
	'submit form': function (e) {
		e.preventDefault();
		var projectId = this._id;

		var task = {
			title: $(e.target).find('[name=title]').val(),
			projectId: projectId
		}

		console.log(task);

		Meteor.call('createTask', task, function (error, id) {
			if (error)
				alert(error.reason);
			else 
				Session.set('newTask-'+projectId, false);
		});
	}
});