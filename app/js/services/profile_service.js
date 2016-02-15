module.exports = function(app) {
	app.factory('ProfileService', ['$http', function($http) {
		return {
			getUser: function() {
				return $http.get('/api/user');
			},
			updateUser: function(newInfo) {
				return $http.put('/api/user');
			}
		};
	}]);
};
