module.exports = function(app) {
	app.controller('RegisterController', ['$scope', 'leagueList' '$location', '$auth', function($scope, leagueList, $location, $auth) {
		$scope.leagueList = leagueList;
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
