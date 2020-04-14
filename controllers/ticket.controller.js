const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket.models.js');

// update ticket status with ticketNumber
router.put("/tickets", Ticket.updateTicketStatus);


// Get ticket status with TicketNumber
router.post("/tickets", Ticket.viewStatus);


// Get all inActive/close Tickets
router.get("/tickets/close", Ticket.getInActiveTickets);


// Get all active/open Tickets
router.get("/tickets/open", Ticket.getActiveTickets);


// Get all tickets
router.get("/tickets", Ticket.getAll);


// Get user details owning the ticket with ticketNumber
router.post("/tickets/details", Ticket.getUserDetails);

// create ticket
router.post("/tickets/create", Ticket.createTicket);

module.exports = router;