var estDep = new Deps.Dependency;

Template.newProjectTask.helpers({
	creatingNewTask: function () {
		return Session.get('newTask-' + this._id); // returns the project id
	},
	timeEstimate: function () {
		estDep.depend();
		var v = Session.get('estimate-' + this._id);
		return v + "min";
	}
});

Template.newProjectTask.events({
	'click .newTaskTrigger': function () {
		Session.set('newTask-'+this._id, true);
	},
	'submit form': function (e) {
		e.preventDefault();
		var projectId = this._id;

		var task = {
			title: $(e.target).find('[name=title]').val(),
			projectId: projectId,
			timeEstimate: Session.get('estimate-' + projectId)
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

Template.newProjectTask.rendered = function () {
	var $project = this.data;
	var value = Session.get('estimate-' + $project._id);
	if (!value) {
		value = 30;
		Session.set('estimate-' + $project._id, value);
	}
	
	var $s = $('.slidah');
	$s.slider();
	$s.slider('option', {min: 0, max: 180, step: 5});
	$s.slider("value", value);
	
	$s.slider({
		change: function(e, ui) {
			var val = $s.slider('value');
			Session.set('estimate-' + $project._id, val);
			estDep.changed();
		}
	})
}
	