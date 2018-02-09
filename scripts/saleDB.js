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

const saleSeed = [
 {
    saleprices: 1000000 ,
    latitude: 34.063878,
    longitude: -118.448450,
    propertyName: "UCLA Extension",

  },
  {
    salesprices: 500000,
    latitude: 34.069829,
    longitude: -118.444737,
    propertyName: "UCLA Anderson School of Management"
  },
  {
    salesprices: 2000000,
    latitude: 34.064135,
    longitude: -118.359208,
    propertyName: "LA County Museum of Art"
  },
  {
    salesprices: 3000000,
    latitude: 34.022717,
    longitude: -118.284959,
    propertyName: "University of Southern California"
  },
  {
    salesprices: 10000000000,
    latitude: 33.942850,
    longitude: -118.408206,
    propertyName: "Los Angeles International Airport"
  }

];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

