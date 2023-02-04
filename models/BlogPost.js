const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// first schema
const BlogPostSchema = new Schema({
  title: String,
  body: String,
});

// Link this schema with a collection
const BlogPost = mongoose.model("BlogPost", BlogPostSchema); // (Name_of_collection, Name_of_schema)

module.exports = BlogPost;
