// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	telephone: {
		type: String,
		required: true
	},
	license: {
		type: String,
		required: true
	}
});

var Users = mongoose.model("Users", userSchema);

module.exports = Users;