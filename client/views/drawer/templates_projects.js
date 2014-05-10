// --------------------------------------
// 		Project List
// --------------------------------------

// Template.projectList.helpers({
// 	projects: function () {
// 		return Projects.find({});
// 	}
// });


// --------------------------------------
// 		Project Template
// --------------------------------------

Template.projectTemplate.helpers({
	tasks: function () {
		return Tasks.find({projectId: this._id, completed: false});
	},
	creatingNewTask: function () {
		return Session.get('newTask-' + this._id); // returns the project id
	}
});

Template.projectTemplate.events({
	'click .newTaskTrigger': function () {
		console.log("New task trigger");
		console.log(this);
		Session.set('newTask-' + this._id, true);
	}
})

Template.projectTemplate.rendered = function () {
	console.log($('#projectsDrawer .task').length);
	$('#projectsDrawer .task').draggable({ 
		helper: function () {
			return $(this).clone().addClass('dragged-task');
		},
		appendTo: 'body',
		cursorAt: {
			top: 25
		}
	});
}

// --------------------------------------
// 		New Project Template
// --------------------------------------

Template.newProjectTemplate.helpers({
	createNewProject: function () {
		return Session.get('createNewProject') === true;
	}
});

Template.newProjectTemplate.events({
	'click .newProjectTrigger': function () {
		Session.set('createNewProject', true);
	},
	'submit form': function (e) {
		e.preventDefault();
		var project = {
			name: $(e.target).find('[name=projectName]').val()
		}

		Meteor.call('createProject', project, function (error, id) {
			if (error)
				alert(error.reason);
			else
				Session.set('createNewProject', false);
		});
	}
});