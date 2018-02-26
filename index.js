const app = require('./src/server/server.js');

app.listen(3000, (err) => {
	if(err) {
		return console.log(err);
	}

	console.log('server started...');
});