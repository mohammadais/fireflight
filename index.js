const express = require('express');
const bodyParser = require('body-parser');

// create connection
const connection = require('./models/connection');
const TicketController = require('./controllers/ticket.controller');
const AdminController = require('./controllers/admin.controller');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
// parse requests of content-type - application/json
app.use(bodyParser.json());


app.set('view engine', 'ejs');

// define a simple route
app.get("/", (req, res) => { 
    res.render("index");
});

// base package
app.use("/api", TicketController);
app.use("/api", AdminController);


// listen for requests
app.listen("3000", () => {
    console.log("Server Started");
})

module.exports = app;