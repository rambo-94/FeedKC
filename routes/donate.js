var express = require('express');
var router = express.Router();
var demo= require('../models/donateDetails');

router.post('/saveDonateDetails', function (req, res, next) {
    var DishName =  req.body.dish ;
    var DOE = req.body.date;
    var contactName=req.body.contactName;
    var location = req.body.location ;
    var ContactNumber = req.body.contactNumber;
    var donateDetails = {DishName: DishName, DOE: DOE,DonorName: contactName, PickUpAddress: location ,ContactNumber: ContactNumber};

    demo.create(donateDetails, function (err, post) {
        if (err) {return res.json({'msg':'Error saving details...Try again'});}
        else {

            return res.json({'msg':'Details saved Successfully'});

        }});



});

router.get('/getDonateDetails', function (req, res, next) {


    demo.find(function (err, items) {
        if (err) return next(err);
        res.json(items);
    });



});

module.exports = router;

