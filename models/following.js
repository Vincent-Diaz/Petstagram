const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowingSchema = new Schema({
  name:{type:String},
  followedAt: { type: Date, default: Date.now }
});

const Following = mongoose.model("Following", FollowingSchema);

module.exports = Following;
