module.exports = function(app) {
	app.controller('ProfileController', ['$scope', '$location', '$auth', 'ProfileService', 
		function($scope, $location, $auth, ProfileService) {
			$scope.getProfile = function() {
				ProfileService.getUser()
					.then(function(res) {
						$scope.user = res.data;
					})
					.catch(function(res) {
						console.log(res.data);
					});
			};

			$scope.updateProfile = function() {
				ProfileService.updateUser($scope.user)
					.then(function(res) {
						console.log('User profile has been updated');
					})
					.catch(function(res) {
						console.log(res.data);
					});
			};
		}
	]);
};
