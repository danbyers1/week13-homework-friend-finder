
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path'); 
var app = express();

var PORT = process.env.PORT || 8080;
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
	console.log("application is listening on PORT:" + PORT);
});

