module.exports = function(app) {
  app.config(['$routeProvider', function($route) {
    $route
      .when('/signin', {
        templateUrl: '',
        controller: ''
      })
      .when('/signup', {
        templateUrl: '/templates/views/signin_view.html',
        controller: 'SignupController'
      })
      .when('/newsession', {
        templateUrl: '',
        controller: ''
      })
      .otherwise({
        redirectto: '/signup'
      });
  }]);
};
