module.exports = function(app) {
  require('./league_service')(app);
  require('./profile_service')(app);
  require('./satellizer_config')(app);
};
