// import connection to the db
var connection = require('../config/connection.js');

// function used to build queries
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

// function for building queries
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

// define orm that will be exported to the burgers.js model
var orm = {
	// selectAll function for grabbing everything from the table
	selectAll: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			// send query result back to callback function
			cb(result);
		});
	},
	// insertOne function for inserting burger into table
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';

		console.log(queryString);
		console.log(vals);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			// send query result back to callback function
			cb(result);
		});
	},

	// update one function for changing burger status
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			// send the query result back to the callback function
			cb(result);
		});
	}
};

// export the orm back to model burger.js
module.exports = orm;