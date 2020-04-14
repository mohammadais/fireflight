const mongoose = require('mongoose');
const TicketModel = mongoose.model('tickets');
const FlightModel = mongoose.model('flights');
const UserModel = mongoose.model('users');

const Admin = {};

Admin.resetAllTickets = (req, res) => {

    // change all the open tickets to close
    TicketModel.updateMany({busNumber: req.body.busNumber , ticketStatus: 'close'}, {ticketStatus: 'open'}, (error, message) => {
        if (!error){
            // reset available seats 
            FlightModel.updateOne({flightNumber: req.body.flightNumber}, {seatsAvailable: 40}, (error, message) => {
                if (!error){
                    res.send(message);
                } else {
                    res.send(error);
                }
            });

        } else {
            res.send(error);
        }
    });
    
}


Admin.addUserDetails = (req, res) => (

    TicketModel.findOne({ticketNumber: req.body.ticketNumber}, (error, user) => {

        if (!error){

            if (user !== null){
                // add details 
                UserModel.updateOne({userId: user.userId}, {
                
                userName: req.body.userName,
                userContact: req.body.userContact ,
                userAddress: req.body.userAddress 

                }, (error, message) => {
                    if (!error){
                        res.send(message);
                    } else {
                        res.send(error);
                    }
                });
            } else {
                res.send("No user found");
            }

        } else {
            res.send(error);
        }
    })
)

module.exports = Admin;
