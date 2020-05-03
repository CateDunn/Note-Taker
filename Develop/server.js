const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 7000;
const notes = require('../Develop/db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.get("/api/notes", function(req, res) {
  return res.json(notes);
});



app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});