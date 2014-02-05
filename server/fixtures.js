if (Tasks.find().count() === 0) {
	
	Tasks.insert({
		title: 'Make checkboxes',
		priority: 1,
		completed: true
	});

	Tasks.insert({
		title: 'Collapse tasks > 3',
		priority: 2,
		completed: false
	});

	Tasks.insert({
		title: 'Create object that contains today\'s tasks',
		priority: 3,
		completed: false
	});

	Tasks.insert({
		title: 'Create floated footer bar with expandable projects',
		priority: null,
		completed: false
	})

	Tasks.insert({
		title: 'Enable drag & drop',
		priority: null,
		completed: false
	});

	Tasks.insert({
		title: 'Make app adjust to timezones',
		priority: null,
		completed: false
	});
}