var projectPageDep = new Deps.Dependency;


Template.drawer.events({
	'click .tag': function (e) {
		var state = Session.get('isDrawerOpen');
		Session.set('isDrawerOpen', !state);
	},
	'click #drawerLeftBtn': function () {
		console.log("click L");
		var page = Session.get('project_page');
		if (page == 0)
			return

		page -= 1;
		Session.set('project_page', page);
		projectPageDep.changed();
	},
	'click #drawerRightBtn': function () {
		console.log("click R");
		var page = Session.get('project_page');
		var count = Session.get('projectsCount');
		console.log('page: ' + page);
		console.log('count: ' + count);

		if (page == count-1)
			return

		page += 1;
		Session.set('project_page', page);
		projectPageDep.changed();
	}
});

Template.drawer.helpers({
	open: function () {
		var state = Session.get('isDrawerOpen');

		if (typeof state === 'undefined' ) {
			state = false;
			Session.set('isDrawerOpen', state);
		}
		return state;
	},

	projects: function () {
		projectPageDep.depend();
		var page = Session.get('project_page');
		if (!page) {
			Session.set('project_page', 0);
			page = 0;
		}


		var projects = Projects.find({});
		projects = projects.map(function (project, index, cursor) {
			project.listPosition = index;
			project.hideR = (index > page + 1) ? 'hideR' : '';  // TODO: +2 not +1
			project.hideL = (index < page) ? 'hideL' : '';

			return project;

		});
		console.log(projects);
		console.log(projects.length);
		Session.set('projectsCount', projects.length )

		
		return projects;
	},
	page: function () {
		var page = Session.get('project_page');
		if (!page)
			Session.set('project_page', 0);

		return Session.get('project_page');
	},

	edgeCase: function () {
		var page = Session.get('project_page');
		var count = Session.get('projectsCount');
		
		var noLeft = (page == 0);
		var noRight = (page == count - 1);

		if (noLeft && noRight)
			return 'noLeft noRight';

		if (noLeft)
			return 'noLeft';
		
		if (noRight)
			return 'noRight';
		
		return '';
	}
});

Template.drawer.rendered = function () {
	var state = Session.get('drawerState');
	if (!state)
		Session.set('drawerState', 'closed');

	$('.drawer').removeClass('open closed').addClass(Session.get('drawerState'));
};