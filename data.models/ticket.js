const mongoose = require('mongoose');

var TicketSchema = new mongoose.Schema({
    ticketNumber: {
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
    userId: {
        type: String,
        required: 'required'
    },
    seatNumber: {
        type: Number
    },
    flightFare: {
        type: Number
    }
});

module.exports = mongoose.model("tickets", TicketSchema);