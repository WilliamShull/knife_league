module.exports = function(app) {
	app.controller('ProfileController', ['$scope', 'userProfile', '$location', '$auth', 'ProfileService', 
		function($scope, userProfile, $location, $auth, ProfileService) {
			console.log(arguments);
			$scope.user = userProfile.data;
			$scope.getProfile = function() {
				ProfileService.getUser()
					.then(function(res) {
						console.log('getUser res:', res.data);
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
