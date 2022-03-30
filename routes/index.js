const express = require("express").Router();

// Import our modular routers for /tips and /feedback
const apiRoutes = require("./notes");
const htmlRoutes = require("./htmlroutes");

express.use("/api", apiRoutes);
express.use("/", htmlRoutes);

module.exports = express;
