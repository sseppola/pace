if (Tasks.find().count() === 0) {

	var ssId = Accounts.createUser({
		username: 'Sindre',
		email: 'sseppola@me.com',
		password: 'password',
		profile: {
			forename: 'Sindre',
			surname: 'Seppola'
		}
	});

	var snId = Accounts.createUser({
		username: 'Sam',
		email: 'samjoonas@gmail.com',
		password: 'password',
		profile: {
			forename: 'Sam',
			surname: 'Nissinen'
		}
	});

	var paceId = Projects.insert({
		name: 'Pace',
		date_created: new Date().getTime(),
		owner: ssId,
		members: [
			ssId,
			snId
		]
	});

	Tasks.insert({
		title: 'Make checkboxes',
		priority: 1,
		completed: true,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Collapse secondary tasks',
		priority: 2,
		completed: true,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Make app display empty slots when tasks are missing',
		priority: 3,
		completed: false,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Create object that contains today\'s tasks',
		priority: null,
		completed: false,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Prevent several tasks of priority 1-3',
		priority: null,
		completed: false,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Create floated footer bar with expandable projects',
		priority: null,
		completed: false,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	})

	Tasks.insert({
		title: 'Enable drag & drop',
		priority: null,
		completed: false,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Make app adjust to timezones',
		priority: null,
		completed: false,
		accepted_date: PaceHelper.todayString(),
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});
}