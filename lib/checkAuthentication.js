var jwt = require('jwt-simple');

module.exports = function(req, res, next) {
  if (!req.headers.authorization) return res.status(401).send({ msg: ''});

  var token = req.headers.authorization.split(' ')[1];
  var payload = null;

  try {
    payload = jwt.decode(token, process.env.TOKEN_SECRET);
  }
  catch (err) {
    console.log('checkAuthentication jwt payload decode error!');
    return res.status(401).send({ msg: err });
  }
  req.user = payload.sub;
  next();
}
