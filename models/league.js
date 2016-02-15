var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leagueSchema = new Schema({
  name: String,
  totalMembers: Number,
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  sessions: [{
  	type: Schema.Types.ObjectId,
  	ref: 'Session'
  }]
});

module.exports = mongoose.model('League', leagueSchema);
