const express = require("express");

// Import our modular routers for /tips and /feedback
const noteRoutes = require("./notes");
const htmlRoutes = require("./htmlroutes");

const app = express();
app.use("/", htmlRoutes);
app.use("/notes", noteRoutes);

module.exports = app;
