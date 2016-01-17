require('angular/angular');
require('angular-ui-router');
require('angular-base64');
require('satellizer');
var angular = window.angular;

var leagueApp = angular.module('leagueApp', ['ui.router', 'base64', 'satellizer']);

require('./services/services')(leagueApp);
require('./router')(leagueApp);
require('./users/users')(leagueApp);
