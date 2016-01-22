module.exports = function(app) {
	app.controller('RegisterController', ['$scope', 'leagueList', '$location', '$auth', function($scope, leagueList, $location, $auth) {
		$scope.leagueList = leagueList.data;
		$scope.signup = function() {
			$auth.signup($scope.user)
				.then(function(res) {
					console.info(res);
					$auth.setToken(res);
					console.log($auth.getToken());
					$location.path('/profile');
				})
				.catch(function(res) {
					console.log(res.data);
				});
		};
	}]);
};
