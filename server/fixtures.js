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
		title: 'Redo drawer in susy',
		priority: 1,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Make a body class that moves everything up when drawer opens',
		priority: 2,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Redo create task',
		priority: 3,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Redo create projects',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Paginate projects',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Remove accepted tasks',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	})

	Tasks.insert({
		title: 'Delete tasks',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Action mode overlay',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Action mode functionality',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Display task and day progression',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Functionality when user is not signed in',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Fix fonts and styling',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Fix login dropdown',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Prettify menu',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Integrate with Harvest',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});

	Tasks.insert({
		title: 'Integrate with JIRA?',
		priority: null,
		completed: false,
		accepted_time: null,
		accepted_by: ssId,
		created_date: new Date().getTime(),
		projectId: paceId,
		owner: ssId,
		timeEstimate: 30
	});
}