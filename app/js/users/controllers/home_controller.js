module.exports = function(app) {
  app.controller('HomeController', ['$rootScope', '$scope', '$http', '$location', 'authService',
    function($rootScope, $scope, $http, $location, authService) {
      $scope.user = $rootScope.user;
    }
  ]);
};
