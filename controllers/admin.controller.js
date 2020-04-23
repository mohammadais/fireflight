const express = require('express');
const router = express.Router();
const Admin = require('../models/admin.models.js');

// create new user
router.post("/create-user", Admin.createUser);

// create new flight
router.get("/create-flight", (req, res) => {
    res.render('create-flight');
});
router.post("/create-flight", Admin.createFlight);

// Admin api resets the all the tickets to open
router.put("/reset-all-tickets", Admin.resetAllTickets);

// Add user details
router.post("/add-user-details", Admin.addUserDetails);

module.exports = router;