module.exports = function(app) {
  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/views/home.html',
        controller: 'HomeController'
      })

      .state('login', {
        url: '/login',
        templateUrl: '/templates/views/login.html',
        controller: 'LoginController'
      })

      .state('register', {
        url: '/register',
        templateUrl: '/templates/views/register.html',
        controller: 'RegisterController',
        resolve: {
          leagueList: function(LeagueService) {
            return LeagueService.leagueList();
          }
        }
      })

      .state('logout', {
        url: '/logout',
        template: null,
        controller: function($location, $auth) { 
          $auth.logout()
            .then(function() {
              $location.path('/');
            });
        }
      })

      .state('profile', {
        url: '/profile',
        templateUrl: '/templates/views/profile.html',
        controller: 'ProfileController',
        resolve: {
          userProfile: function(ProfileService) {
            return ProfileService.getUser();
          }
        }
      })

      .state('leagueRoster', {
        url: '/league-roster',
        templateUrl: '/templates/views/league_roster.html',
        controller: 'LeagueRosterController'
      })

      .state('newSession', {
        url: '/new-session/:league',
        templateUrl: '/templates/views/new_session.html',
        controller: 'NewSessionController',
        resolve: {
          leagueMemberList: function(LeagueService, $stateParams) {
            return LeagueService.getLeague($stateParams.league);
          }
        }
      })

      .state('session', {
        url: '/session',
        templateUrl: '/templates/views/session.html',
        controller: 'SessionController',
        params: { gameDocs: null }
      });

    $urlRouterProvider.otherwise('/');
  }]);
};
