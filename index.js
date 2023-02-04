// Packages
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { resolveNaptr } = require("dns");

// Files models
const BlogPost = require("./models/BlogPost");

// Connect app to the MongoDB database
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.upwjuwm.mongodb.net/?retryWrites=true&w=majority" // update username and password, add DB name before "?"
);

// Initializing
const app = express();
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index"); //file extension is not required. App automatically knows this is ejs file and is in views folder
});

app.get("/about", (req, res) => {
  res.render("about"); // ejs file
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

// Create
BlogPost.create(
  {
    title: "My first post",
    body: "I am excited for it.",
  },
  (error, blogpost) => {
    console.log(error, blogpost);
  }
);
