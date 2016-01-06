angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/_home.html'
		})

		// show all users
		.when('/users', {
			templateUrl: 'views/users/_all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'views/users/_single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'views/users/_single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		});

	$locationProvider.html5Mode(true);

});
