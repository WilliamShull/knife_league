module.exports = function(app) {
  app.controller('SignupController', ['$http', '$scope', '$rootScope', '$location', function($http, $scope, $rootScope, $location) {
    $scope.user = {};
    $scope.hasAccount = false;

    $scope.getLeagueList = function() {
      $http.get('/api/leagueNames')
        .then(function(res) {
          $scope.leagueList = res.data.msg;
        }, function(res) {
          console.log('/leagueNames err: ', res);
        })
    };

    $scope.signup = function(user) {
      $http.post('/api/signup', user)
        .then(function(res) {
          $rootScope.user = res.data.msg;
          $location.path('/home');
        }, function(res) {
          console.log(res);
        });
    };
  }]);
};
