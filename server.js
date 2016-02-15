var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/knife_league');
process.env.TOKEN_SECRET = process.env.TOKEN_SECRET || 'tortilla';

app.use(express.static(__dirname + '/build'));

var userRoutes = require(__dirname + '/routes/user_routes');
// var gameRoutes = require(__dirname + 'routes/game_routes');
app.use('/api', userRoutes);
// app.use('/api', gameRoutes);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server running on port: ', port);
});
