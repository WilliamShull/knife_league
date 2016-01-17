module.exports = function(app) {
	app.controller('RegisterController', ['$scope', '$location', '$auth', function($scope, $location, $auth) {
		$scope.signup = function() {
			$auth.signup(user)
				.then(function(res) {
					$auth.setToken(res);
					$location('/profile');
				})
				.catch(function(res) {
					console.log(res.data);
				});
		};
	}]);
};
