const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

// create connection
const connection = require('./config/connection');
const TicketController = require('./controllers/ticket.controller');
const AdminController = require('./controllers/admin.controller');
const UserController = require('./controllers/user.controller');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use(expressLayouts);
app.set('view engine', 'ejs');

// define a simple route
app.get("/", (req, res) => { 
    res.render("index");
});

// base package
app.use("/api/tickets", TicketController);
app.use("/api/admin", AdminController);
app.use("/api/user", UserController);


// listen for requests
app.listen("3000", () => {
    console.log("Server Started");
})

module.exports = app;