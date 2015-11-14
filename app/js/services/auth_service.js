module.exports = function(app) {
  app.factory('authService', ['$http', '$rootScope', '$window', '$location',
    function($http, $rootScope, $window, $location) {
      var sessionStorage = $window.sessionStorage;

      var setHeader = function(token) {
        if (!token) {
          $http.defaults.headers.common['Authorization'] = '';
        } else {
          $http.defaults.headers.common['Authorization'] = 'BEARER ' + token;
          return true;
        }
      }

      var setToken = function(token) {
        if (!token) {
          $rootScope.user = {};
          sessionStorage.removeItem('userToken');
        } else {
          sessionStorage.setItem('userToken', token);
        }
        return setHeader(token);
      }

      return {
        setHeader: setHeader,
        setToken: setToken
      };
    }
  ]);
};
