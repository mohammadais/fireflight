const mongoose = require('mongoose');

var TicketSchema = new mongoose.Schema({
    ticketNumber: {
        type: String
    },
    userId: {
        type: String,
        required: 'required'
    },  
    ticketStatus : {
        type: String,
        default: 'close'
    },
    flightNumber: {
        type: String,
        required: 'required'
    },
    flightName: {
        type: String
    },
    createdOn : {
        type: Date,
        default: Date.now()
    },
    seatNumber: {
        type: Number
    },
    flightFare: {
        type: Number
    },
    travelClass: {
        type: String
    },
    noOfAdults: {
        type: Number,
        default: 1
    },
    noOfChildren: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("tickets", TicketSchema);