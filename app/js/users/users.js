module.exports = function(app) {
  require('./controllers/home')(app);
  require('./controllers/login')(app);
  require('./controllers/navbar')(app);
  require('./controllers/new_session')(app);
  require('./controllers/profile')(app);
  require('./controllers/register')(app);
  require('./controllers/session_controller')(app);
};
