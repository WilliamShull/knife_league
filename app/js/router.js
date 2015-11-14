module.exports = function(app) {
  app.config(['$routeProvider', function($route) {
    $route
      .when('/signup', {
        templateUrl: '',
        controller: ''
      })
      .when('/signin', {
        templateUrl: '',
        controller: ''
      })
      .when('/newsession', {
        templateUrl: '',
        controller: ''
      })
  }]);
};
