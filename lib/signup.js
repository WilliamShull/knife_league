var User = require(__dirname + '/../models/user');
var handleError = require(__dirname + '/handle_error');

module.exports = function(req, res) {

  //needs username, password, email, and league name
  var league = League.findOne({ name: req.body.leagueChoice });
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.league = req.body.leagueChoice;

  //Hash the users password before saving to db
  newUser.generateHash(password, function(err, hash) {
    if (err) return handleError.err500(err, res);
    newUser.password = hash;

    //Generate a new token to send back
    newUser.generateToken(function(err, token) {
      if (err) return handleError.err500(err, res);
      newUser.token = token;

      //save user to DB
      newUser.save(function(err, savedUser) {
        if (err) return handleError.err500(err, res);
        league.members.push(savedUser._id);

        //save updated league to DB
        league.save(function(err, savedLeague) {
          if (err) return handleError.err500(err, res);
          res.json(savedUser);
        });
      });
    });
  });
};
