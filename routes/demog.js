express = require('express');
var router = express.Router();
var demog = require('../models/demographics');
var login= require('../models/login');
router.get('/:username', function (req, res, next) {

    demog.findOne({'username': req.params.username}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/updateDemog', function (req, res, next) {
    var username = req.body.username;
    var newusername = req.body.newUsername;
    var newemail = req.body.newmail;
    var newaddress = req.body.newaddress;
    var demogValues = {username: newusername, email: newemail, address: newaddress};

    demog.findOneAndUpdate({"username":username},demogValues, function (err, post) {

        if (err)
            return res.json({'msg': 'Error saving details...Try again'});
        else

            res.json({'msg': 'Data updated successfully'});


    });


});



router.post('/updatePass', function (req, res, next) {
    var username = req.body.username;
    var newPassword = req.body.newPassword;

    login.findOneAndUpdate({"username": username}, {password: newPassword}, function (err, post) {

        if (err)
            return res.json({'msg': 'Error saving details...Try again'});
        else {
            res.json({'msg': 'Password updated successfully'});

        }
    });
});


module.exports = router;



