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
  if (this.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(this.password, salt, function(err, hash) {
        this.password = hash;
        next();
      }.bind(this));
    }.bind(this));
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
