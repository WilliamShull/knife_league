var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var eat = require('eat');

var userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: String,
  email: { type: String, unique: true },
  token: String,
  league: String,
  stats: {
    hits: Number,
    demerits: Number,
    throws: Number,
    hitRate: Number
  }
});

userSchema.methods.findAvg = function(cb) {

};

userSchema.methods.generateHash = function(pw, cb) {
  bcrypt.hash(pw, 8, null, function(err, hash) {
    if (err) return cb(err);
    this.password = hash;
    cb(null, hash);
  }.bind(this));
};

userSchema.methods.compareHash = function(pw, cb) {
  bcrypt.compare(pw, this.password, cb);
};

userSchema.methods.generateToken = function(cb) {
  eat.encode({ id: this._id, timeStamp: Date.now() }, process.env.APP_SECRET, cb);
};

module.exports = mongoose.model('User', userSchema);
