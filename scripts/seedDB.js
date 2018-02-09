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

const userSeed = [
  {
    firstName: "Tyler",
    lastName: "Durden",
    accountEmail: "test1@email.com",
    accountId: "test1"
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    accountEmail: "test2@email.com",
    accountId: "test2"
  },
  {
    firstName: "Bird",
    lastName: "Person",
    accountEmail: "test3@email.com",
    accountId: "test3"
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
