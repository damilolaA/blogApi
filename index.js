const app = require('./src/server/server.js'),
	  config = require('./config/config.js'),
	  { port } = config;

app.listen(port, (err) => {
	if(err) {
		return console.log(err);
	}

	console.log('server started at ' + port);
});