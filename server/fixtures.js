if (Tasks.find().count() === 0) {
	var now = new Date();
	var dd = now.getDate(),
		mm = now.getMonth(),
		yyyy = now.getFullYear();

	var today = dd + '.' + mm + '.' + yyyy;
	var yday = dd-1 + '.' + mm + '.' + yyyy;

	Tasks.insert({
		title: 'Make checkboxes',
		priority: 1,
		completed: true,
		accepted_date: today
	});

	Tasks.insert({
		title: 'Collapse secondary tasks',
		priority: 2,
		completed: true,
		accepted_date: yday
	});

	Tasks.insert({
		title: 'Make app display empty slots when tasks are missing',
		priority: 3,
		completed: false,
		accepted_date: today
	});

	Tasks.insert({
		title: 'Create object that contains today\'s tasks',
		priority: null,
		completed: false,
		accepted_date: today
	});

	Tasks.insert({
		title: 'Prevent several tasks of priority 1-3',
		priority: null,
		completed: false,
		accepted_date: today
	});

	Tasks.insert({
		title: 'Create floated footer bar with expandable projects',
		priority: null,
		completed: false,
		accepted_date: today
	})

	Tasks.insert({
		title: 'Enable drag & drop',
		priority: null,
		completed: false,
		accepted_date: today
	});

	Tasks.insert({
		title: 'Make app adjust to timezones',
		priority: null,
		completed: false,
		accepted_date: today
	});
}

// if (User.find().count() === 0) {
// 	var today = new Date();
// 	var dd = today.getDate(),
// 		mm = today.getMonth() + 1,
// 		yyyy = today.getFullYear();
// 	var dateString = dd + '.' + mm + '.' + yyyy;
// }
