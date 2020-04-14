const mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
    
    flightNumber: {
        type: String
    },
    ticketNumber: {
        type: String
    },
    seatsAvailable: {
        type: Number,
        default: 40
    },
    totalSeats: {
        type: Number,
        default: 40
    },
    flightSource: {
        type: String
    },
    flightDestination: {
        type: String
    },
    onwardDate: {
        type: Date
    },
    seatAvailable: {
        type: Number
    },
    hasWifi: {
        type: Boolean
    },
    hasCharger: {
        type: Boolean
    }
});
module.exports = mongoose.model("flights", FlightSchema);