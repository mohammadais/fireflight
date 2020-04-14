const express = require('express');
const bodyParser = require('body-parser');

// create connection
const connection = require('./models/connection');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => { 
    res.send("Success");
});

// listen for requests
app.listen("3000", () => {
    console.log("Server Started");
})

module.exports = app;