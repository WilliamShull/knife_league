module.exports = function(app) {
  app.controller('SignupController', ['$http', '$scope', '$rootScope', '$location', function($http, $scope, $rootScope, $location) {
    $scope.getLeagueList = function() {
      $http.get('/api/leagueNames')
        .then(function(res) {
          console.log('/leagueNames res: ', res);
          $scope.leagueList = res.data.msg;
        }, function(res) {
          console.log('/leagueNames err: ', res);
        })
    };
    $scope.user = {};
    $scope.hasAccount = false;

    $scope.signup = function(user) {
      $http.post('/api/signup', user)
        .then(function(res) {
          $rootScope.user = res.data;
          console.log($rootScope.user);
        }, function(res) {
          console.log(res);
        });
    };
  }]);
};
