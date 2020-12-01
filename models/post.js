const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title:{type:String},
  imageUrl:{type:String, require:true},
  caption: { type: String, required: true },
  postCreated: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
