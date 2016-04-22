module.exports = function(app) {
	app.controller('SessionController', ['$scope', '$location', '$auth', '$state',
		function($scope, $location, $auth, $state) {
      $scope.gameDocs = $state.params.obj.docs;
			console.log('SessionController state params obj: ', $state.params.obj);
		}]);
};
