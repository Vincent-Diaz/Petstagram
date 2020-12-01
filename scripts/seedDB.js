const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/petstagram"
);

const postseed = [
    {},
    {}
];

db.Post
    .remove({})
    .then(() => db.Post.collection.insertMany(postseed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });