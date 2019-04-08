const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./route/api/users");
const profile = require("./route/api/profile");
const post = require("./route/api/post");

const app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB confic
const db = require("./confic/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send(" This is my first pj"));

// Use Route
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
