module.exports = function(app) {
  app.controller('NewSessionController', ['$scope', 'leagueMemberList', '$location', 'SessionService', '$auth', '$state',
    function($scope, leagueMemberList, $location, SessionService, $auth, $state) {
      console.log(leagueMemberList.data);
      $scope.leagueData = leagueMemberList.data;
      $scope.gameData = {
        league: $scope.leagueData._id,
        players: []
      };

      $scope.toggleSelection = function(playerId, username) {
        var playerIndex = $scope.gameData.players.indexOf(playerId);
        if (playerIndex === -1) {
          $scope.gameData.players.push({ playerId: playerId, username: username });
        } else {
          $scope.gameData.players.splice(playerIndex, 1);
        }
      };

      $scope.createSession = function() {
        SessionService.createSession($scope.gameData)
          .then(function(res) {
            console.log('createSession res: ', res.data);
            $state.go('session', { obj: res.data });
          })
          .catch(function(res) {
            console.log(res.data);
          });
      };
    }]);
};
