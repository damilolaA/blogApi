const mongoose = require('mongoose'),
  config = require('../../../../config/config.js'),
  { databaseUrl } = config;

mongoose.connect(databaseUrl);

let postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', postsSchema);
