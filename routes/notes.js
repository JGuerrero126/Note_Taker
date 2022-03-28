const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const notes = require("express").Router();

notes.get("/", (req, res) => {
  console.info(`${req.method} request received for the notes`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { activenote } = req.body;

  if (req.body) {
    const newTip = {
      activenote,
      tip_id: uuid(),
    };

    readAndAppend(newTip, "./db/tips.json");
  }
});

module.exports = notes;
