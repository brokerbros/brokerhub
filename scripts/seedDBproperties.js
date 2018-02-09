const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brokerhub",
  {
    useMongoClient: true
  }
);

const propertySeed = [
  {
    latitude: 34.063878,
    longitude: -118.448450,
    propertyName: "UCLA Extension",
    squarefeet: 40000,
    type: "Office",
    askingrent: 1.45
  },
  {
    latitude: 34.069829,
    longitude: -118.444737,
    propertyName: "UCLA Anderson School of Management",
    squarefeet: 100000,
    type: "Office",
    askingrent: 2.45
  },
  {
    latitude: 34.064135,
    longitude: -118.359208,
    propertyName: "LA County Museum of Art",
    squarefeet: 140000,
    type: "Other",
    askingrent: 3.45
  },
  {
    latitude: 34.022717,
    longitude: -118.284959,
    propertyName: "University of Southern California",
    squarefeet: 200000,
    type: "Academic",
    askingrent: 1.45
  },
  {
    latitude: 33.942850,
    longitude: -118.408206,
    propertyName: "Los Angeles International Airport",
    squarefeet: 300000,
    type: "Office",
    askingrent: 2.45
  }

];

db.Properties
  .remove({})
  .then(() => db.Properties.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.insertedIds.length + " properties inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
