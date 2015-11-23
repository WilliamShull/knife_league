var User = require(__dirname + '/../models/user');
var passport = require('passport');
var bearerStrategy = require('passport-http-bearer');

passport.use(new bearerStrategy(
  function(token, done) {
    User.findOne({ token: token }, function(err, user) {
      if (err) return done(err);
      if (!user) return done(null, false);
      return done(null, user);
    });
  }
));

module.exports = passport.authenticate('bearer', { session: false });
