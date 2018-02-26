const express = require('express'),
  api = express.Router(),
  postsRouter = require('./v1/posts/posts-router.js');

api.use('/posts', postsRouter);

module.exports = api;
