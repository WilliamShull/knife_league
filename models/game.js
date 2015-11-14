var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  league: String,
  players: Array
});
