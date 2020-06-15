var mongoose = require('mongoose');

var donateSch = new mongoose.Schema({
    DishName: String,
    DOE: Date,
    DonorName: String,
    PickUpAddress: String,
    ContactNumber: String

});

module.exports = mongoose.model('donate', donateSch);
