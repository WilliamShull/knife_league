module.exports = function(app) {
  app.config(['$routeProvider', function($route) {
    $route
      .when('/signin', {
        templateUrl: '',
        controller: ''
      })
      .when('/signup', {
        templateUrl: '/templates/views/signin_view.html',
        controller: 'SigninController'
      })
      .when('/newsession', {
        templateUrl: '',
        controller: ''
      })
  }]);
};
