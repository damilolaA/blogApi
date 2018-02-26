const express = require('express'),
	  app     = express(),
	  bps	  = require('body-parser'),
	  morgan  = require('morgan'),
	  cors	  = require('cors'),
	  api     = require('../api/api.js');

app.use(bps.json());
app.use(bps.urlencoded({extended: false}));

app.use(morgan('dev'));

app.use(cors());

app.use('/api/v1', api);

module.exports = app;