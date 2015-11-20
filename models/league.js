var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leagueSchema = new Schema({
  name: String,
  totalMembers: Number,
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('League', leagueSchema);
