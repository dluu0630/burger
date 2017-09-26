// require orm file 
var orm = require("../config/orm.js");

// create burger variable that will be exported back to the controller
var burger = {
	// get all burgers
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	// add new burger
	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	// update burger status
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// export burger back to controller
module.exports = burger;