const mongoose = require('mongoose');
const TicketModel = mongoose.model('tickets');
const UserModel = mongoose.model('users');
const FlightModel = mongoose.model('flights');


const Ticket = {};

// // update ticket status
Ticket.updateTicketStatus = (req, res) => {
    // validate request
    if(!req.body.ticketNumber) {
        return res.status(400).send({
            message: "Id can not be empty"
        });
    }

    TicketModel.updateOne({ticketNumber: req.body.ticketNumber},
        
        {ticketStatus: req.body.ticketStatus}, (error, message) => {
    
        if (!error){
            res.send(message);
        } else{
            res.send(error);
        }
    });
}


// // Get ticket status by tickentNumber
Ticket.viewStatus = (req, res) => {
    //validate request 
    if(!req.body) {
        return res.status(400).send({
            message: "Id content can not be empty"
        });
    }
    
    TicketModel.findOne({ticketNumber : req.body.ticketNumber}, (error, ticket) => {
        if (!error){            
            if (ticket == null)
                res.send("Wrong Ticket number");
            else
                res.send('Ticket status : ' + ticket.ticketStatus);
        }
        else {
            res.send(error);
        }
    });
}


// // Get all closed Tickets
Ticket.getInActiveTickets = (req, res) => {

    TicketModel.find({ticketStatus: 'close'}, (error, closedTickets) => {
        if (!error){            
            res.send(closedTickets);
        }
        else {
            res.send(error);
        }
    });
}

// // View user details from tickt number
Ticket.getUserDetails = (req, res) => {

     //validate request 
     if(!req.body) {
        return res.status(400).send({
            message: "Id content can not be empty"
        });
    }

    // find user ID from ticket ID
    TicketModel.findOne({ticketNumber : req.body.ticketNumber}, (error, ticketDetails) => {
        if (!error){            
            // get User details with user ID
            if (ticketDetails == null)
                res.send("No user Found");
            else{
                UserModel.find({userId: ticketDetails.userId}, (error, userDetails) => {
                    if (!error){
                        if (userDetails.userName == null){
                            res.send('user details not found');
                        } else {
                            res.send(userDetails);
                        }
                    } else {
                        res.send('Cannot find user');
                    }
                    
                });   
            }
        }
        else {
            res.send(error);
        }
    });
}


// Get all open Tickets
Ticket.getActiveTickets = (req, res) => {
    TicketModel.find({ticketStatus: 'open'}, (error, openTickets) => {
        if (!error){            
            res.send(openTickets);
        }
        else {
            res.send(error);
        }
    });
}


// // Get all tickets
Ticket.getAll = (req, res) => {

    TicketModel.find((error, tickets) => {
        if (!error){            
            res.send(tickets);
        }
        else {
            res.send(error);
        }
    });
}

// create ticket
Ticket.createTicket = (req, res) => {
    

    // validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Id content can not be empty"
        });
    }

    var ticket = new TicketModel();
    ticket.ticketNumber = req.body.ticketNumber;
    // ticket.ticketStatus = req.body.ticketStatus;
    ticket.flightNumber = req.body.flightNumber;
    ticket.userId = req.body.userId;
    ticket.seatNumber = req.body.seatNumber;
    ticket.flightFare = req.body.flightFare;

    FlightModel.findOne({flightNumber: req.body.flightNumber}, (error, flight) => {

        if (flight) {

            if (flight.seatsAvailable > 0){
                FlightModel.updateOne({flightNumber: req.body.flightNumber}, { $inc: {seatsAvailable : -1 } }, (error, message) => {

                    if (!error){
                        ticket.save((error, data) => {  
                            if (!error){
                                res.send("Your Ticket ID is : " + ticket.ticketNumber);
                            } else {
                                res.send(error);
                            }
                        });
            
                    } else {
                        res.send(error);
                    }
                });
            } else {
                res.send('All the seats are closed on flight number : ' + req.body.flightNumber);
            }
        } else {
            res.send('No flight Registered with flight number : ' + req.body.flightNumber);
        }
    });
}


module.exports = Ticket;
