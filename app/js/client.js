require('angular/angular');
require('angular-route');
require('angular-base64')
var angular = window.angular;

var leagueApp = angular.module('leagueApp', ['ngRoute', 'base64']);

require('./services/services')(leagueApp);
require('./router')(leagueApp);
require('./users/users')(leagueApp);
