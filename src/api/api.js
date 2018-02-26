const express = require('express'),
	  api     = express.Router(),
	  postsRouter = require('../../api.js');

api.use('/posts', postsRouter);

module.exports = api;