//Work In Progress
// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	},
	telephone: {
		type: String,
		required: true
	},
	cellphone: {
		type: Number,
		required: true
	},
	fax: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	specialties: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	scopeExperience: {
		type: String,
		required: true
	},
	background: {
		type: String,
		required: true
	},
	education: {
		type: String,
		required: true
	},
	transationHistory: {
		type: String,
		required: true
	},
	licenceNumber: {
		type: Number,
		required: true
	}
});

var user = mongoose.model("user", salesSchema);

module.exports = user;
