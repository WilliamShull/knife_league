module.exports = function(app) {
	app.config(['$authProvider', function($authProvider) {
			$authProvider.loginUrl = '/api/signin';
			$authProvider.signupUrl = '/api/signup';
			$authProvider.storageType = 'sessionStorage';
		}]);
};
