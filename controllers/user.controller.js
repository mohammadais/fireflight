const express = require('express');
const router = express();
const mongoose = require('mongoose');
const FlightModel = mongoose.model('flights');

router.get('/search', (req, res) => {
    res.render('search-flight');
});

router.post('/search', (req, res) => {  

    FlightModel.find({}, (error, flights) => {
        if (!error){
            // console.log(flights);
            res.render('search-result', {data: {
                result: flights
            }});
        } else {
            res.send(error);
        }
    });
});


module.exports = router;