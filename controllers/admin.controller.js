const express = require('express');
const router = express.Router();
const Admin = require('../models/admin.models.js');

// Admin api resets the ticket all the tickets to inActive
router.put("/admin", Admin.resetAllTickets);

// Add user details
router.post("/admin", Admin.addUserDetails);

module.exports = router;