var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var basicStrategy = require(__dirname + '/../lib/basic_strategy');
var bearerStrategy = require(__dirname + '/../lib/bearer_strategy');
var handleRes = require(__dirname + '/../lib/handle_response');
var handleError = require(__dirname + '/../lib/handle_error');
var jsonParser = require('body-parser').json();
var User = require(__dirname + '/../models/user');
var League = require(__dirname + '/../models/league');

var userRoutes = module.exports = exports = express.Router();

userRoutes.post('/signup', jsonParser, function(req, res) {
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.league = req.body.leagueChoice;
  newUser.generateHash(req.body.password, function(err, hash) {
    if (err) return handleError.err500('generateHash', res);
    newUser.password = hash;
    newUser.generateToken(function(err, token) {
      if (err) return handleError.err500('generateToken', res);
      newUser.token = token;
      newUser.save(function(err, savedUser) {
        if (err) return handleError.err500('newUser save', res);
        League.findOneAndUpdate({ name: req.body.leagueChoice }, { $push: { members: savedUser._id }}, function(err, doc) {
          if (err) return handleError.err500('league findAndUpdate', res);
          return handleRes.send201(savedUser, res);
        });
      });
    });
  });
});

userRoutes.get('/signin', basicStrategy, function(req, res) {

});

userRoutes.get('/getstats', function(req, res) {

});

userRoutes.get('/leagueNames', function(req, res) {
  League.find({}, 'name', function(err, docs) {
    if (err) return handleError.err500(err, res);
    return handleRes.send200(docs, res);
  });
});

userRoutes.post('/createLeague', jsonParser, function(req, res) {
  console.log('/createLeague req.body: ', req.body);
  var newLeague = new League();
  newLeague.name = req.body.leagueName;
  newLeague.totalMembers = 0;
  newLeague.save(function(err, league) {
    if (err) return handleError.err500(err, res);
    return handleRes.send201(league, res);
  });
});

userRoutes.get('/errRoute', function(req, res) {
  return handleError.err401(null, res);
});
