var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
  date: Date,
  players: [{
    type: String,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Session', sessionSchema);
