module.exports = function(app) {
	app.controller('RegisterController', ['$scope', 'leagueList', '$location', '$auth', function($scope, leagueList, $location, $auth) {
		console.log(leagueList);
		$scope.leagueList = leagueList.data;
		$scope.signup = function() {
			$auth.signup($scope.user)
				.then(function(res) {
					$auth.setToken(res);
					$location.path('/profile');
				})
				.catch(function(res) {
					console.log(res.data);
				});
		};
	}]);
};
