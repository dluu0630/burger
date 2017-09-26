// dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// create express app instance
var app = express();

// set port to 3000 or what heroku sets it to
var PORT = process.env.PORT || 3000;

// express middleware 
app.use(express.static(__dirname + '/public'));

/// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// set handlebars as the default 
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// initiate listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});