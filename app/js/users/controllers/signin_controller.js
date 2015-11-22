module.exports = function(app) {
  app.controller('SigninController', ['$http', '$rootScope', '$scope', '$location', '$base64', 'authService',
    function($http, $rootScope, $scope, $location, $base64, authService) {
      if ($rootScope.user) {
        $rootScope.user = null;
        authService.setToken();
      }

      $scope.hasAccount = true;
      $scope.user = {};

      $scope.signin = function(user) {
        $http({
          method: 'GET',
          url: '/api/signin',
          headers: {
            'Authorization': 'Basic ' + $base64.encode(user.username + ':' + user.password)
          }
        })
        .then(function(res) {
          $rootScope.user = res.data;
          authService.setToken($rootScope.user.token);
          $location.path('/home');
        }, function(res) {
          console.log(res);
        });
      };

    }
  ]);
};
