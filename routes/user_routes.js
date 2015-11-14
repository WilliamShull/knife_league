var express = require('express');
var mongoose = require('mongoose');
var handleError = require(__dirname + '../lib/handle_error');

var userRoutes = module.exports = exports = express.Router();

userRoutes.post('/signup', function(req, res) {

});

userRoutes.get('/signin', function(req, res) {

});

userRoutes.get('/getstats', function(req, res) {

});
