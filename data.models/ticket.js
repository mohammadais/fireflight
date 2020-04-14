const mongoose = require('mongoose');

var TicketSchema = new mongoose.Schema({
    ticketNumber: {
        type: String,
        required: 'required'
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
    createdOn : {
        type: Date,
        default: Date.now()
    },
    seatNumber: {
        type: Number
    },
    flightFare: {
        type: Number
    }
});

module.exports = mongoose.model("tickets", TicketSchema);