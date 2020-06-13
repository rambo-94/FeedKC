var mongoose = require('mongoose');

var demoSch = new mongoose.Schema({
    username: String,
    email: String,
    address: String

});

module.exports = mongoose.model('demo', demoSch);
