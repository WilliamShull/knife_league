module.exports = function(app) {
	app.controller('LoginController', ['$scope', '$location', '$auth', function($scope, $location, $auth) {
		$
		$scope.login = function() {
			$auth.login($scope.user)
				.then(function(res) {
					$auth.setToken(res)
					$location.path('/profile');
				})
				.catch(function(res) {
					console.log(res.data);
				});
		};
	}]);
};
