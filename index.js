const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/auth");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const commentController = require("./controllers/comment");
const app = express();

// connect db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () =>
  console.log("Successfully connected to your db")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/user", userController);
app.use("/post", postController);
app.use("/comment", commentController);

// connect server
app.listen(process.env.PORT, () => console.log("Server is up"));
