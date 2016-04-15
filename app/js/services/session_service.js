module.exports = function(app) {
	app.factory('SessionService', ['$http', function($http) {
		return {
			getSession: function(id) {
				return $http.get('/api/session' + id);
			},
			createSession: function(data) {
				//send _id of selected players and the league for session creation
				return $http.post('/api/session', data);
			},
			updateSession: function(data) {
				return $http.put('/api/session', data);
			}
		};
	}]);
};
