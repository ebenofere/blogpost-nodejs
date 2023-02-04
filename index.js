// Packages
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const { resolveNaptr } = require("dns");

// Files models
const BlogPost = require("./models/BlogPost");

// Connect app to the MongoDB database
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.upwjuwm.mongodb.net/blogApp?retryWrites=true&w=majority" // update username and password, add DB name before "?"
);

// Initializing - start express app with function
const app = express();
app.set("view engine", "ejs");

// Middlewares - static files
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // file extension is not required. App automatically knows this is ejs file and is in views folder
});

app.get("/about", (req, res) => {
  res.render("about"); // this is ejs file in Views folder
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

// start server
app.listen("4000", () => {
  console.log("App running on the port 4000");
});

// -------- CRUD Operations ----------

// Create data
// BlogPost.create(
//   {
//     title: "Mario Gotze",
//     body: "German Striker",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// Read data -  find
// BlogPost.find(
//   {
//     title: /Oscar/, // wild card
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

const id = "63ded2f31916735eafb4949e";

//Read data - findbyId
// BlogPost.findById(id, (error, blogpost) => {
//   console.log(error, blogpost);
// });

// Update data
// BlogPost.findByIdAndUpdate(id, { title: "New title" }, (error, blogpost) => {
//   console.log(error, blogpost);
// });

// Delete data
// BlogPost.findByIdAndDelete(id, (error, blogpost) => {
//   console.log(error, blogpost);
// });
