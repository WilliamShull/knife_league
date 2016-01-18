module.exports = function(app) {
  app.config(['$stateProvider', '$urlRouteProvider', function($stateProvider, $urlRouteProvider) {
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
      .state('profile', {
        url: '/profile',
        templateUrl: '/templates/views/profile.html',
        controller: '/ProfileController'
      });

    $urlRouteProvider.otherwise('/');
  }]);
};
