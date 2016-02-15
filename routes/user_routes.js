var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var moment = require('moment');
var jsonParser = require('body-parser').json();
var User = require(__dirname + '/../models/user');
var League = require(__dirname + '/../models/league');

var userRoutes = module.exports = exports = express.Router();

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

function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(2, 'days').unix()
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
}

userRoutes.post('/signup', jsonParser, function(req, res) {
  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (existingUser) return res.status(409).send({ msg: 'Account already exists'});

    var user = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      league: req.body.league,
      stats: {
        hits: 0,
        demerits: 0,
        throws: 0,
        hitRate: 0
      }
    });
    user.save(function(err, savedDoc) {
      if (err) return res.status(500).send({ msg: err});
      League.findOneAndUpdate({ name: savedDoc.league }, { $push: { members: savedDoc._id }}, function(err, doc) {
        if (err) return res.status(500).send({ msg: err});
        console.log(savedDoc);
        console.log(doc);
        res.status(201).send({ token: createJWT(savedDoc) });
      });
    });
  });
});

userRoutes.post('/signin', jsonParser, function(req, res) {
  User.findOne({ email: req.body.email }, '+password', function(err, user) {
    if (!user) return res.status(401).send({ msg: 'invalid username or password'});
    if (err) return res.status(500).send({ msg: 'Server Error'});
    user.comparePassword(req.body.password, function(err, result) {
      if (!user) return res.status(401).send({ msg: 'invalid username or password'});
      res.send({ token: createJWT(user) });
    });
  });
});

userRoutes.get('/user', checkAuthentication, function(req, res) {
  console.log('GET /user req.user: ', req.user);
  User.findOne({ _id: req.user }, function(err, user) {
    if (!user) return res.status(401).send({ msg: 'User not found'});
    if (err) return res.status(500).send({ msg: 'Server Error'});
    res.send(user);
  });
});

userRoutes.put('/user', checkAuthentication, function(req, res) {
  User.findOne({ _id: req.user }, function(err, res) {
    if (!user) return res.status(401).send({ msg: 'User not found' });
    //update and save user document to DB, send res
  });
});

userRoutes.get('/leagueList', function(req, res) {
  League.find({}, 'name', function(err, docs) {
    if (err) return res.status(500).send({ msg: 'Server Error'});
    res.send(docs);
  });
});

userRoutes.get('/league/:name', function(req, res) {
  League.findOne({ name: req.params.name }, function(err, league) {
    if (err) return res.status(500).send({ msg: 'Server Error'});
    league.populate('members', function(err, memberList) {
      if (err) return res.status(500).send({ msg: err});
      res.send(league);
    });
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
