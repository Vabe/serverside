var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(3030, function() {
	console.log("On: 3030");
});