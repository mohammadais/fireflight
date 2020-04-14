const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'required'
    },
    ticketNumber: {
        type: String,
        required: 'required'
    },
    userName: {
        type: String,
        required: 'required'
    },
    userContact: {
        type: String
    },
    userAddress: {
        type: String
    }
});
module.exports = mongoose.model("users", UserSchema);