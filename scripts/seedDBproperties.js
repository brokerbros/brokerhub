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
    "id": "0",
    "address": "10995 Le Conte Ave.",
    "city": "Los Angeles",
    "state": "California",
    "zipcode": 90024,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis odio ac erat dignissim luctus. Sed arcu ipsum, posuere eget orci quis, lobortis gravida elit. Nulla eget sem ligula. Sed eget pharetra purus. Mauris dui risus, efficitur in imperdiet tempus, ultrices congue neque. Ut vitae auctor mauris, non sollicitudin leo. Nam rutrum sapien eget sapien ornare dignissim. In ac aliquam odio, ac malesuada nulla. Nam eu tortor at velit dignissim semper. Suspendisse potenti. Quisque tincidunt consectetur gravida. Donec eu condimentum arcu. Aliquam blandit augue et dolor sodales luctus. Nam mattis pellentesque volutpat. Quisque sed dapibus tortor. Suspendisse velit neque, sagittis at libero ac, finibus dapibus tellus. Proin euismod ipsum diam, nec elementum felis sodales eu. Donec placerat ullamcorper neque, non tempor leo venenatis ut. Nulla nec blandit diam. Morbi nec malesuada urna. Donec ut lobortis enim, et mattis dui. Quisque eu ex vehicula, suscipit erat ac, sagittis magna. Praesent lacinia urna vulputate mi pulvinar ullamcorper.",
    "size": "2500 sq ft",
    "images": [
      {
        "id": 1,
        "image": "https://studious.s3.amazonaws.com/photos/2259-640.jpg",
        "name": "UCLA Building"
      },
      {
        "id": 2,
        "image": "https://studious.s3.amazonaws.com/photos/2258-640.jpg",
        "name": "UCLA Building"
      }
    ],
    squarefeet: 40000,
    type: "Office",
    askingrent: 1.45
  },
  {
    latitude: 34.069829,
    longitude: -118.444737,
    propertyName: "UCLA Anderson School of Management",
    "id": "1",
    "address": "110 Westwood Plaza",
    "city": "Los Angeles",
    "state": "California",
    "zipcode": 90095,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis odio ac erat dignissim luctus. Sed arcu ipsum, posuere eget orci quis, lobortis gravida elit. Nulla eget sem ligula. Sed eget pharetra purus. Mauris dui risus, efficitur in imperdiet tempus, ultrices congue neque. Ut vitae auctor mauris, non sollicitudin leo. Nam rutrum sapien eget sapien ornare dignissim. In ac aliquam odio, ac malesuada nulla. Nam eu tortor at velit dignissim semper. Suspendisse potenti. Quisque tincidunt consectetur gravida. Donec eu condimentum arcu. Aliquam blandit augue et dolor sodales luctus. Nam mattis pellentesque volutpat. Quisque sed dapibus tortor. Suspendisse velit neque, sagittis at libero ac, finibus dapibus tellus. Proin euismod ipsum diam, nec elementum felis sodales eu. Donec placerat ullamcorper neque, non tempor leo venenatis ut. Nulla nec blandit diam. Morbi nec malesuada urna. Donec ut lobortis enim, et mattis dui. Quisque eu ex vehicula, suscipit erat ac, sagittis magna. Praesent lacinia urna vulputate mi pulvinar ullamcorper.",
    "size": "2500 sq ft",
    "images": [
      {
        "id": 1,
        "image": "http://dailybruin.com/images/43327_web.ns.8.22.andersono.jpg",
        "name": "UCLA Anderson School of Management"
      },
      {
        "id": 2,
        "image": "https://www.anderson.ucla.edu/Images/areas/prg/emba/2015/financing-new-banner10-15.jpg",
        "name": "UCLA Anderson School of Management"
      },
      {
        "id": 3,
        "image": "https://cdn.stacyblackman.com/wp/wp-content/uploads/UCLA-Anderson-Large.jpg",
        "name": "UCLA Anderson School of Management"
      },
    ],
    squarefeet: 100000,
    type: "Office",
    askingrent: 2.45
  },
  {
    latitude: 34.064135,
    longitude: -118.359208,
    propertyName: "LA County Museum of Art",
    "id": "2",
    "address": "5905 Wilshire Blvd",
    "city": "Los Angeles",
    "state": "California",
    "zipcode": 90036,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis odio ac erat dignissim luctus. Sed arcu ipsum, posuere eget orci quis, lobortis gravida elit. Nulla eget sem ligula. Sed eget pharetra purus. Mauris dui risus, efficitur in imperdiet tempus, ultrices congue neque. Ut vitae auctor mauris, non sollicitudin leo. Nam rutrum sapien eget sapien ornare dignissim. In ac aliquam odio, ac malesuada nulla. Nam eu tortor at velit dignissim semper. Suspendisse potenti. Quisque tincidunt consectetur gravida. Donec eu condimentum arcu. Aliquam blandit augue et dolor sodales luctus. Nam mattis pellentesque volutpat. Quisque sed dapibus tortor. Suspendisse velit neque, sagittis at libero ac, finibus dapibus tellus. Proin euismod ipsum diam, nec elementum felis sodales eu. Donec placerat ullamcorper neque, non tempor leo venenatis ut. Nulla nec blandit diam. Morbi nec malesuada urna. Donec ut lobortis enim, et mattis dui. Quisque eu ex vehicula, suscipit erat ac, sagittis magna. Praesent lacinia urna vulputate mi pulvinar ullamcorper.",
    "size": "25000 sq ft",
    "images": [
      {
        "id": 1,
        "image": "https://www.artnews.com/wp-content/uploads/2015/06/lacma.jpg",
        "name": "LA County Museum of Art"
      },
      {
        "id": 2,
        "image": "https://ahotmama.files.wordpress.com/2013/07/lacma_jazz_main_1.jpg",
        "name": "LA County Museum of Art"
      },
      {
        "id": 3,
        "image": "http://www.lacma.org/sites/default/files/TransformationHeader2_0.jpg",
        "name": "LA County Museum of Art"
      }
    ],
    squarefeet: 140000,
    type: "Other",
    askingrent: 3.45
  },
  {
    latitude: 34.022717,
    longitude: -118.284959,
    propertyName: "University of Southern California",
    "id": "3",
    "address": "",
    "city": "Los Angeles",
    "state": "California",
    "zipcode": 90007,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis odio ac erat dignissim luctus. Sed arcu ipsum, posuere eget orci quis, lobortis gravida elit. Nulla eget sem ligula. Sed eget pharetra purus. Mauris dui risus, efficitur in imperdiet tempus, ultrices congue neque. Ut vitae auctor mauris, non sollicitudin leo. Nam rutrum sapien eget sapien ornare dignissim. In ac aliquam odio, ac malesuada nulla. Nam eu tortor at velit dignissim semper. Suspendisse potenti. Quisque tincidunt consectetur gravida. Donec eu condimentum arcu. Aliquam blandit augue et dolor sodales luctus. Nam mattis pellentesque volutpat. Quisque sed dapibus tortor. Suspendisse velit neque, sagittis at libero ac, finibus dapibus tellus. Proin euismod ipsum diam, nec elementum felis sodales eu. Donec placerat ullamcorper neque, non tempor leo venenatis ut. Nulla nec blandit diam. Morbi nec malesuada urna. Donec ut lobortis enim, et mattis dui. Quisque eu ex vehicula, suscipit erat ac, sagittis magna. Praesent lacinia urna vulputate mi pulvinar ullamcorper.",
    "size": "250000 sq ft",
    "images": [
      {
        "id": 1,
        "image": "https://cdn.vox-cdn.com/thumbor/uEAjaaErzW9SuUoxef5nYRPbFwY=/0x600/cdn.vox-cdn.com/uploads/chorus_asset/file/4797163/6.0.jpg",
        "name": "University of Southern California"
      },
      {
        "id": 2,
        "image": "https://admission.usc.edu/images/hdr_DiscoverUSCFallOpenHouse.jpg",
        "name": "University of Southern California"
      },
      {
        "id": 3,
        "image": "https://media.nbclosangeles.com/images/1200*675/usc+%5Bgenericsla%5D.jpg",
        "name": "University of Southern California"
      }
    ],
    squarefeet: 200000,
    type: "Academic",
    askingrent: 1.45
  },
  {
    latitude: 33.942850,
    longitude: -118.408206,
    propertyName: "Los Angeles International Airport",
    "id": "4",
    "address": "1 World Way",
    "city": "Los Angeles",
    "state": "California",
    "zipcode": 90045,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis odio ac erat dignissim luctus. Sed arcu ipsum, posuere eget orci quis, lobortis gravida elit. Nulla eget sem ligula. Sed eget pharetra purus. Mauris dui risus, efficitur in imperdiet tempus, ultrices congue neque. Ut vitae auctor mauris, non sollicitudin leo. Nam rutrum sapien eget sapien ornare dignissim. In ac aliquam odio, ac malesuada nulla. Nam eu tortor at velit dignissim semper. Suspendisse potenti. Quisque tincidunt consectetur gravida. Donec eu condimentum arcu. Aliquam blandit augue et dolor sodales luctus. Nam mattis pellentesque volutpat. Quisque sed dapibus tortor. Suspendisse velit neque, sagittis at libero ac, finibus dapibus tellus. Proin euismod ipsum diam, nec elementum felis sodales eu. Donec placerat ullamcorper neque, non tempor leo venenatis ut. Nulla nec blandit diam. Morbi nec malesuada urna. Donec ut lobortis enim, et mattis dui. Quisque eu ex vehicula, suscipit erat ac, sagittis magna. Praesent lacinia urna vulputate mi pulvinar ullamcorper.",
    "size": "100000 sq ft",
    "images": [
      {
        "id": 1,
        "image": "http://cdn.lamag.com/wp-content/uploads/sites/9/2017/04/lax.jpg",
        "name": "Los Angeles International Airport"
      },
      {
        "id": 2,
        "image": "https://www.wired.com/wp-content/uploads/2017/05/wired_inside-lax-during-the-most-ambitious-airport-move-ever-3.jpg",
        "name": "Los Angeles International Airport"
      },
      {
        "id": 3,
        "image": "https://www.wired.com/wp-content/uploads/2017/05/wired_inside-lax-during-the-most-ambitious-airport-move-ever-3.jpg",
        "name": "Los Angeles International Airport"
      },
      {
        "id": 4,
        "image": "https://www.discoverlosangeles.com/sites/default/files/media/transportation/airport_information/lax-aerial-view.jpg",
        "name": "Los Angeles International Airport"
      },
      {
        "id": 5,
        "image": "http://www.theairport.org/images/lax_airport_advertising_image.jpg",
        "name": "Los Angeles International Airport"
      }
    ],
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
