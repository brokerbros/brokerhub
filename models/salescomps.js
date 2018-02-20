// require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var salesSchema = new Schema({
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
  saleprices: {
    type: Number,
    required: true
  },
  listingBroker: {
    type: String
  }
});

var SalesComps = mongoose.model("SalesComps", salesSchema);

module.exports = SalesComps;