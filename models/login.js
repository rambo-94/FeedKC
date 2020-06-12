var mongoose = require('mongoose');

var loginSch = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    donor: Boolean,
    requester: Boolean

});

module.exports = mongoose.model('login', loginSch);
