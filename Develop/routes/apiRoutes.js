// const notes = require('../db/db.json');
// const fs = require('fs');



// module.exports = (app) => {
//     //route to the note API
//     app.get('/api/notes', (req, res) => {
//         res.json(notes)
    
//     });

//     //post a new note

//     app.post("/api/notes", function(req, res) {
//         const newNote = req.body;
//         notes.push(newNote);
//        fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes, null, 1), 'utf-8')
//        res.json(newNote)
//       });


// }
