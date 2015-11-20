var mongoose = require('mongoose');

var leagueSchema = new mongoose.Schema({
  name: String,
  totalMembers: Number,
  members: [{
    type: mongoose.Schema.Type.objectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('League', leagueSchema);
