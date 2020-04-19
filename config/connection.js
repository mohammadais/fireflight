// this file creates connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fireflight", {
useUnifiedTopology: true,
useNewUrlParser: true,
}).then(() => console.log('DB Connected!'))
.catch(error => {
    console.log(Error, error.message);
});


const Ticket = require("../data.models/ticket");
const User = require("../data.models/user");
const Flight = require("../data.models/flight");
module.exports = {Ticket, User, Flight};
