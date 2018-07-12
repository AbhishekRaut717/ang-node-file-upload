var mongoose = require('mongoose');

var Panel = mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    filename: String,
    size: Number,
    data: Buffer
});

module.exports = mongoose.model('Panel', Panel);