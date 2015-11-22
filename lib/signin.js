var handleError = require(__dirname + '/handle_error');

module.exports = function(req, res) {
  res.json(req.user);
};
