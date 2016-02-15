module.exports = function(app) {
	app.factory('SessionService', ['$http', function($http) {
		return {
			getSession: function() {
				return $http.get('/api/session');
			},
			createSession: function(data) {
				return $http.post('/api/session', data);
			},
			updateSession: function(data) {
				return $http.put('/api/session', data);
			}
		};
	}]);
};
