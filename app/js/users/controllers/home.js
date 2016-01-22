module.exports = function(app) {
	app.controller('HomeController', ['$scope', '$location', '$auth', function($scope, $location, $auth) {
		if ($auth.isAuthenticated()) {
			$location.path('/profile');
		}
	}]);
};
