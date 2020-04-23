const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket.models.js');

// update ticket status with ticketNumber
router.put("/update-ticket-status", Ticket.updateTicketStatus);


// Get ticket status with TicketNumber
router.post("/view-status", Ticket.viewStatus);


// Get all close Tickets
router.get("/get-close-tickets", Ticket.getCloseTickets);


// Get all open Tickets
router.get("/get-open-tickets", Ticket.getOpenTickets);


// Get all tickets
router.get("/", Ticket.getAll);


// Get user details owning the ticket with ticketNumber
router.post("/get-user-details", Ticket.getUserDetails);

// create ticket
router.post("/create-ticket", Ticket.createTicket);

module.exports = router;