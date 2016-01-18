module.exports = function(app) {
	app.factory('LeagueService', ['$http', function($http) {
		return {
			leagueList: function() {
				return $http.get('/api/leagueList');
			},
			getLeague: function(leagueName) {
				return $http.get('/api/league/' + leagueName);
			}
		};
	}]);
};
