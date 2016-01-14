var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, select: false},
  email: { type: String, unique: true },
  league: String,
  stats: {
    hits: Number,
    demerits: Number,
    throws: Number,
    hitRate: Number
  }
});

userSchema.pre('save', function(next) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(this.password, salt, function(err, hash) {
      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePasswords = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
