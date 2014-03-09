// --------------------------------------
// 		projectTaskTemplate template
// --------------------------------------

Template.projectTaskTemplate.events({
	'mousedown .task': function () {
		console.log("mousedown");
		Session.set('draggedTask', this._id);
	}

})


// --------------------------------------
// 		newProjectTaskTemplate template
// --------------------------------------
var timeEstimateDep = new Deps.Dependency;

Template.newProjectTaskTemplate.helpers({
	creatingNewTask: function () {
		return Session.get('newTask-' + this._id); // returns the project id
	},
	timeEstimate: function () {
		timeEstimateDep.depend();
		var v = Session.get('estimate-' + this._id);
		return v + "min";
	}
});

Template.newProjectTaskTemplate.events({
	'click .newTaskTrigger': function () {
		Session.set('newTask-' + this._id, true);
	},
	'submit form': function (e) {
		e.preventDefault();
		var projectId = this._id;

		var task = {
			title: $(e.target).find('[name=title]').val(),
			projectId: projectId,
			timeEstimate: Session.get('estimate-' + projectId)
		}

		Meteor.call('createTask', task, function (error, id) {
			if (error)
				alert(error.reason);
			else 
				Session.set('newTask-'+projectId, false);
		});
	}
});

// This is to retain the state of the drawer in a redraw
Template.newProjectTaskTemplate.rendered = function () {
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
			timeEstimateDep.changed();
		}
	})
}
	