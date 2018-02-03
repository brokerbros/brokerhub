// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var propertySchema = new Schema({
	address: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	latitude: {
		type: Double,
		required: true
	},
	longitude: {
		type: Number,
		required: true
	},
	propertyName: {
		type: String,
	},
	squarefeet: {
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	askingrent: {
		type: Number,
		required: true
	}
});

var Properties = mongoose.model("Properties", propertySchema);

module.exports = Properties;