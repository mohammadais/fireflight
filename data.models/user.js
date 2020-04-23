const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    userName: {
        type: String,
        required: 'required'
    },
    userContact: {
        type: String,
        required: 'required'
    },
    userAddress: {
        type: String,
        required: 'required'
    }
});
module.exports = mongoose.model("users", UserSchema);