if (Tasks.find().count() === 0) {
	
	Tasks.insert({
		title: 'Write masterpiece',
		completed: false
	});

	Tasks.insert({
		title: 'Work out',
		completed: false
	});

	Tasks.insert({
		title: 'Dance',
		completed: false
	});
	
}