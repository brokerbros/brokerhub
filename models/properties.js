// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var propertySchema = new Schema({
	address: {
		type: String,
	},
	city: {
		type: String,
	},
	state: {
		type: String,
	},
	latitude: {
		type: Number,
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
	},
	type: {
		type: String,
	},
	askingrent: {
		type: Number,
	}
});

var Properties = mongoose.model("Properties", propertySchema);

module.exports = Properties;