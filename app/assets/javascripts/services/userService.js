angular.module('userService', [])

.factory('User', function($http) {

	// create a new object
	var userFactory = {};

	// get a single user
	userFactory.get = function(id) {
		return $http.get('/users/' + id + '.json');
	};

	// get all users
	userFactory.all = function() {
		return $http.get('/users.json');
	};

	// create a user
	userFactory.create = function(userData) {
		return $http.post('/users.json/', userData);
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('/users/' + id + '.json');
	};

	// return our entire userFactory object
	return userFactory;

});
