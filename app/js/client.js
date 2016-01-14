require('angular/angular');
require('angular-route');
require('angular-base64');
require('satellizer');
var angular = window.angular;

var leagueApp = angular.module('leagueApp', ['ngRoute', 'base64', 'satellizer']);

require('./services/services')(leagueApp);
require('./router')(leagueApp);
require('./users/users')(leagueApp);
