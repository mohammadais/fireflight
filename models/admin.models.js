const mongoose = require('mongoose');
const TicketModel = mongoose.model('tickets');
const FlightModel = mongoose.model('flights');
const UserModel = mongoose.model('users');

const Admin = {};

// create new user
Admin.createUser = (req, res) => {

    // validate request
    if(!req.body) {
        return res.status(400).send({
            message: "user details not given"
        });
    }

    UserModel.countDocuments({}, (error, totalUsers) => {
        if (!error){

            var newUser = new UserModel();
            newUser.userId = totalUsers + 1;
            newUser.userName = req.body.userName;
            newUser.userContact = req.body.userContact;
            newUser.userAddress = req.body.userAddress;
            newUser.save((error, data) => {
                if (!error) {
                    res.send("Your user ID is : " + newUser.userId);
                } else {
                    res.status("can not save details").send(error);
                }
            });

        } else {
            res.send('cannot add user');
        }
    });


}


// create new flight
Admin.createFlight = (req, res) => {

    // validate request
    if(!req.body) {
        return res.status(400).send({
            message: "user details not given"
        });
    }

    FlightModel.countDocuments({}, (error, totalFlights) => {

        var newFlight = new FlightModel();
        newFlight.flightNumber = totalFlights + 1;
        newFlight.totalSeats = req.body.totalSeats;
        newFlight.seatsAvailable = req.body.totalSeats;
        newFlight.flightSource = req.body.flightSource;
        newFlight.flightDestination = req.body.flightDestination;
        newFlight.save((error, data) => {
            if (!error) {
                res.send("Flight number is : " + newFlight.flightNumber);
            } else {
                res.send(error);
            }
        });
    });
}


// reset all tickets
Admin.resetAllTickets = (req, res) => {

    // change all the close tickets to open
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

// update user details
Admin.addUserDetails = (req, res) => {

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
    });
}

module.exports = Admin;
