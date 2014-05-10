// --------------------------------------
// 		projectTaskTemplate template
// --------------------------------------

Template.projectTaskTemplate.events({
	'mousedown .task': function (e) {
		console.log(e);
		console.log("task id: " + this._id);
		Session.set('draggedTask', this._id);
	},
	'click .deleteTaskBtn': function (e) {
		Meteor.call('deleteTask', this, function (error, id) {
			// if (error) {
			// 	console.error(error.reason);
			// 	console.error("error deleting task from templates_task.js");
			// }
		});
	}
 });

Template.projectTaskTemplate.helpers({
	'taskClasses': function () {
		var priority = "";

		if (new Date().setHours(0,0,0,0) < this.accepted_time) priority += 'accceptedToday ';

		if (this.priority) priority += "p" + this.priority + ' ';

		return priority;
	}
});


// --------------------------------------
// 		newProjectTaskTemplate template
// --------------------------------------
var timeEstimateDep = new Deps.Dependency;

Template.newProjectTaskTemplate.helpers({
	timeEstimate: function () {
		timeEstimateDep.depend();
		var v = Session.get('estimate-' + this._id);
		return v + "min";
	}
});

Template.newProjectTaskTemplate.events({
	'click .deleteTaskBtn': function () {
		Session.set('newTask-' + this._id, false);
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
	
	var $s = $('.slider');
	$s.slider({
		min: 0,
		max: 180,
		step: 5,
		value: value,
		slide: function (e, ui) {
			var val = $s.slider('value');
			Session.set('estimate-' + $project._id, val);
			timeEstimateDep.changed();	
		}
	});

}
	