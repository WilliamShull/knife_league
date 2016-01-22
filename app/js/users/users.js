module.exports = function(app) {
  require('./controllers/register')(app);
  require('./controllers/login')(app);
  require('./controllers/profile')(app);
  require('./controllers/home')(app);
};
