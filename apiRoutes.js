const path = require("path");
const fs = require("fs");

module.exports = (app) => {
    //all notes API route
    app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "/db/db.json")));

    //returns note by ID
    app.get("/api/notes/:id", (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        res.json(savedNotes[Number(req.params.id)]);
    });

    //post a new note
    app.post("/api/notes", (req, res) => {
        //show current notes
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        //add a new note
        let newNote = req.body;
        //assign the new note an id
        let uniqueID = (savedNotes.length).toString();
        //assign id as a parameter
        newNote.id = uniqueID;
        //push new note to the current notes
        savedNotes.push(newNote);

        //write the new note to the JSON db file and notify user it was successful
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        console.log("Note successfully saved");
        res.json(savedNotes);
    })

    //delete a note
    app.delete("/api/notes/:id", (req, res) => {
        //read current notes
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        //note's ID
        let noteID = req.params.id;
        //assigned ID of 0
        let newID = 0;
        console.log(`Note: ${noteID} successfully deleted`);
        savedNotes = savedNotes.filter(currNote => {
            return currNote.id != noteID;
        })
        
        //redo IDs for the notes left
        for (currNote of savedNotes) {
            currNote.id = newID.toString();
            newID++;
        }

        //updating JSON file
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        res.json(savedNotes);
    })
}