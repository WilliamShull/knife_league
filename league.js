var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var eat = require('eat');

var leagueSchema = new mongoose.Schema({
  name: String,
  totalMembers: Number,
  members: [{ name: String, id: String}]
});
