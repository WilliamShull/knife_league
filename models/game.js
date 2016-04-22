var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  playerId: String,
  username: String,
  league: String,
  demerits: { type: Number, default: 0 },
  throws: { type: Number, default: 0 },
  cards: {
    one: { type: Number, default: 0 },
    two: { type: Number, default: 0 },
    three: { type: Number, default: 0 },
    four: { type: Number, default: 0 },
    five: { type: Number, default: 0 },
    six: { type: Number, default: 0 },
    bullseye: { type: Number, default: 0}
  }
},
{ timestamps: true }
);

module.exports = mongoose.model('Game', gameSchema);
