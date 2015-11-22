var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var basicStrategy = require(__dirname + '/../lib/basic_strategy');
var bearerStrategy = require(__dirname + '/../lib/bearer_strategy');
var handleError = require(__dirname + '/../lib/handle_error');
var jsonParser = require('body-parser').json;
var User = require(__dirname + '/../models/user');
var League = require(__dirname + '/../models/league');

var userRoutes = module.exports = exports = express.Router();

userRoutes.post('/signup', jsonParser, function(req, res) {
  require(__dirname + '/../lib/signup')(req, res);
});

userRoutes.get('/signin', basicStrategy, function(req, res) {
  require(__dirname + '/../lib/signin')(req, res);
});

userRoutes.get('/getstats', function(req, res) {

});

userRoutes.get('/errRoute', function(req, res) {
  handleError.err401(null, res);
});
