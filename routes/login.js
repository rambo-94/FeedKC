var express = require('express');
var router = express.Router();
var login = require('../models/login.js');
var demo= require('../models/demographics');


router.get('/', function (req, res, next) {
    login.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.post('/register', function (req, res, next) {
    var username =  req.body.username ;
    var password = req.body.password;
    var email=req.body.email;
    var donor = req.body.donor == ""?false:true;
    var requester = req.body.requestor == ""?false:true;
    var address = req.body.address;
    var loginValues = {username: username, password: password,email: email, donor: donor ,requester: requester};
    var demoValues ={username: username, address: address,email: email};
    login.create(loginValues, function (err, post) {
        if (err) {return res.json({'error':'Error saving details...Try again'});}
        else {

            demo.create(demoValues, function (err, post) {
                if (err){ return next(err);}else {
                    res.json({'msg': 'User added successfully'});
                }});
        }});



});

router.get('/:username', function (req, res, next) {

    login.findOne({'username': req.params.username}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
