var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var jsonParser = require('body-parser').json();
var checkAuthentication = require(__dirname + '/../lib/checkAuthentication');
var User = require(__dirname + '/../models/user');
var League = require(__dirname + '/../models/league');
var Game = require(__dirname + '/../models/game');

var gameRoutes = module.exports = exports = express.Router();

gameRoutes.post('/session', checkAuthentication, jsonParser, function(req, res) {
  console.log('POST /session req.body data: ', req.body);
	var docList = [];
	for (var i = 0; i < req.body.players.length; i++) {
		docList.push({
      league: req.body.league,
      playerId: req.body.players[i].playerId,
      username: req.body.players[i].username
    });
	}
	Game.create(docList, function(err, docs) {
		if (err) return res.status(500).send({ msg: err });
		res.status(201).send({ docs: docs });
	});
});
