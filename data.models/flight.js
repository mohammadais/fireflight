const mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema({
    
    flightNumber: {
        type: String
    },
    seatsAvailable: {
        type: Number
    },
    totalSeats: {
        type: Number
    },
    flightSource: {
        type: String
    },
    flightDestination: {
        type: String
    },
    time: {
        type: Date
    }
});
module.exports = mongoose.model("flights", FlightSchema);