const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const notes = require("express").Router();

notes.get("/", (req, res) => {
  console.info(`${req.method} request received for the notes`);
  fs.readFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  const { body } = req.body;

  if (req.body) {
    const newNote = {
      body,
      tip_id: uuidv4(),
    };

    fs.readFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  }
});

module.exports = notes;
