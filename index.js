var express = require('express'),
	app     = express();

app.listen(3000, (err) => {
	if(err) {
		return console.log(err);
	}

	console.log('server started...');
})