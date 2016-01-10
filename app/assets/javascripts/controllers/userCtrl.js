angular.module('userCtrl', ['userService'])

.controller('userController', function(User) {

	var vm = this;

	vm.processing = true;

	User.all()
		.success(function(data) {

			vm.processing = false;

			vm.users = data;
		});

	vm.deleteUser = function(id) {
		vm.processing = true;

		User.delete(id)
			.success(function(data) {

				User.all()
					.success(function(data) {
						vm.processing = false;
						vm.users = data;
					});

			});
	};

})

.controller('userCreateController', function(User) {

	var vm = this;

	vm.type = 'create';

	vm.cleanFname = function() {
		vm.userData.firstname = vm.userData.firstname.replace(/[^a-z]/i, '');
	};
	vm.cleanLname = function() {
		vm.userData.lastname = vm.userData.lastname.replace(/[^a-z]/i, '');
	};
	vm.cleanPhone = function() {
		vm.userData.phone = vm.userData.phone.replace(/[^0-9]/i, '');
	};

	vm.saveUser = function(isVaild) {
		if (isVaild) {
			vm.processing = true;
			vm.success = '';
			vm.alert = '';

			User.create(vm.userData)
				.success(function(data) {
					vm.processing = false;
					vm.userData = {};
					if (data.status === "false") {
						vm.alert = data.error[0];
					} else {
						vm.success = 'Employee created successfully!';
					}
				});
			}
	};

})

.controller('userEditController', function($routeParams, User) {

	var vm = this;

	vm.type = 'edit';

	vm.cleanFname = function() {
		vm.userData.firstname = vm.userData.firstname.replace(/[^a-z]/i, '');
	};
	vm.cleanLname = function() {
		vm.userData.lastname = vm.userData.lastname.replace(/[^a-z]/i, '');
	};
	vm.cleanPhone = function() {
		vm.userData.phone = vm.userData.phone.replace(/[^0-9]/i, '');
	};

	User.get($routeParams.user_id)
		.success(function(data) {
			vm.userData = data;
		});

	vm.saveUser = function(isVaild) {
		if (isVaild) {
			vm.processing = true;
			vm.success = '';
			vm.alert = '';

			User.update($routeParams.user_id, vm.userData)
				.success(function(data) {
					vm.processing = false;

					if (data.status === "false") {
						vm.alert = data.error[0];
					} else {
						vm.success = 'Employee updated successfully!';
					}
				});
		}
	};

});
