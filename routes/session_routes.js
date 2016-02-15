var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var jsonParser = require('body-parser').json();
var User = require(__dirname + '/../models/user');
var League = require(__dirname + '/../models/league');

var sessionRoutes = module.exports = exports = express.Router();

function checkAuthentication(req, res, next) {
  if (!req.headers.authorization) return res.status(401).send({ msg: ''});

  var token = req.headers.authorization.split(' ')[1];
  var payload = null;

  try {
    payload = jwt.decode(token, process.env.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ msg: err });
  }
  req.user = payload.sub;
  next();
}

sessionRoutes.post('/session')

sessionRoutes.get('/session', function(req, res) {

});
