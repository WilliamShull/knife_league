module.exports = function(app) {
  app.controller('SignupController', ['$http', '$scope', '$rootScope', '$location', function($http, $scope, $rootScope, $location) {
    $scope.user = {};
    $scope.hasAccount = false;

    $scope.signup = function(user) {
      $http.post('/api/signup', user)
        .then(function(res) {
          $rootScope.user = res.body;
          console.log($rootScope.user);
        }, function(res) {
          console.log(res);
        });
    }
  }])
}
