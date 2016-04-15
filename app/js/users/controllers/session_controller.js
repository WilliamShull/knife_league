module.exports = function(app) {
	app.controller('SessionController', ['$scope', '$location', '$auth', '$stateParams',
		function($scope, $location, $auth, $stateParams) {
			console.log($stateParams);
			
		}]);
};
