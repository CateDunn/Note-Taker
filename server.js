//dependencies
const express = require("express");
const path = require("path");

//setting up express app
const app = express();
const PORT = process.env.PORT || 3000
const mainDir = path.join(__dirname, "/public");

//setting up Express app to handle data parsing
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./Develop/apiRoutes')(app);
require('./Develop/htmlRoutes')(app);

//starts the server
app.listen(PORT, () => console.log('App listening on PORT:' + PORT));
