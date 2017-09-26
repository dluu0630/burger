// Set up database connection
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Semper86',
		database: 'burgers_db'
	});
};


var connection = mysql.createConnection({
 	host: "localhost",
 	port: 3306,
	user: "root",
 	password: "Semper86",
 	database: "burgers_db" 
 });


connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export connection back to orm
module.exports = connection;