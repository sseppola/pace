Router.configure({
	layoutTemplate: 'layout',
});

Router.map(function () {
	this.route('home', {
		path: '/',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'menuOverview': {to: 'menuContent'}
		},
		waitOn: function () {
			return [
				Meteor.subscribe('tasks'),
				Meteor.subscribe('projects')
			]
		}
	});
});