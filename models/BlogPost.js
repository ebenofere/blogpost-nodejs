const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// blogpost schema
const BlogPostSchema = new Schema({
  // define the structure of the application
  title: String,
  body: String,
});

// Link this schema with the collection
const BlogPost = mongoose.model("BlogPost", BlogPostSchema); // (Name_of_collection, Name_of_schema)

module.exports = BlogPost;
