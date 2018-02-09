// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var leaseSchema = new Schema({
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
  askingrent: {
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
  saleprices: {
    type: Number,
  },
  listingBroker: {
    type: String
  }
});

var LeaseComps = mongoose.model("LeaseComps", leaseSchema);

module.exports = LeaseComps;