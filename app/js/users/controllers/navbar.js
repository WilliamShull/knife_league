module.exports = function(app) {
	app.controller('NavbarController', ['$scope', '$auth', function($scope, $auth) {
		$scope.isAuthenticated = function() {
			return $auth.isAuthenticated();
		};
	}]);
};
