module.exports = function(app) {
  app.controller('SigninController', ['$http', '$rootScope', '$scope', '$location', '$base64', '$auth',
    function($http, $rootScope, $scope, $location, $base64, $auth) {
      $scope.isAuthenticated = function() {
        return $auth.
      }

      $scope.register = function() {
        $scope.hasAccount = false;
        $location.path('/signup');
      };

      $scope.signin = function(user) {
        
      };

    }
  ]);
};
