module.exports = function(app) {
	app.config(function($authProvider) {
		$authProvider.loginurl = '/api/signin';
		$authProvider.signupurl = '/api/signup';
		$authProvider.storageType = 'sessionStorage';
	});
};
