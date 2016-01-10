module.exports = function(app) {
  app.config(['$routeProvider', function($route) {
    $route
      .when('/signin', {
        templateUrl: '/templates/views/signin_register_view.html',
        controller: 'SigninController'
      })
      .when('/signup', {
        templateUrl: '/templates/views/signin_register_view.html',
        controller: 'SignupController'
      })
      .when('/home', {
        templateUrl: '/templates/views/home_view.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/signin'
      });
  }]);
};
