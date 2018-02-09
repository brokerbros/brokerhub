//Work In Progress
// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	accountId: {
		type: String,
	},
	accountEmail: {
		type: String,
		required: true
	},
	contactEmail: {
		type: String,
	},
	telephone: {
		type: String,
	},
	cellphone: {
		type: Number,
	},
	fax: {
		type: Number,
	},
	title: {
		type: String,
	},
	location: {
		type: String,
	},
	specialties: {
		type: String,
	},
	title: {
		type: String,
	},
	scopeExperience: {
		type: String,
	},
	background: {
		type: String,
	},
	education: {
		type: String,
	},
	transationHistory: {
		type: String,
	},
	licenceNumber: {
		type: Number,
	}
});

var Users = mongoose.model("Users", userSchema);

module.exports = Users;
