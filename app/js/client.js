require('angular/angular');
require('angular-route');
var angular = window.angular;

var leagueApp = angular.module('leagueApp', ['ngRoute']);

require('./services/services')(leagueApp);
require('./users/users')(leagueApp);
require('./game/game')(leagueApp);
require('./services/services')(leagueApp);
require('./router')(leagueApp);
