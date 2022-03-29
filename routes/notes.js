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

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      tip_id: uuidv4(),
    };

    fs.readFile("./db/db.json", (err, data) => {
      let storedData = JSON.parse(data);
      storedData.push(newNote);

      fs.writeFile(`./db/db.json`, JSON.stringify(storedData), (err) =>
        err
          ? console.error(err)
          : console.log(
              `Review for ${newReview.product} has been written to JSON file`
            )
      );
    });
  }
});

module.exports = notes;
