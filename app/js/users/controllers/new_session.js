module.exports = function(app) {
  app.controller('NewSessionController', ['$scope', 'leagueMemberList', '$location', '$auth',
    function($scope, leagueMemberList, $location, $auth) {
      console.log(leagueMemberList.data);
      $scope.leagueData = leagueMemberList.data;
    }]);
};
