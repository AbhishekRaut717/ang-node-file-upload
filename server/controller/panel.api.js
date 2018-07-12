var Panel = require('../model/panel.model');
var fs = require('fs');
var mongoose = require('mongoose');
var Gridfs = require('gridfs-stream');
var path = require('path');

exports.uploadImage = function(req, res)
{
    var db = mongoose.connection.db;
    var mongoDriver = mongoose.mongo;
    var gfs = new Gridfs(db, mongoDriver);
    var writeStream = gfs.createWriteStream({
        filename: req.files.file.name,
        mode: 'w',
        content_type: req.files.file.mimetypem,
        metadata: req.body
    });
    fs.createReadStream(req.files.file.path).pipe(writeStream);

    writeStream.on('close', function(file) {
        res.json({message: 'Store Files'})
    });
    setTimeout(() => {
        var write_fs = fs.createWriteStream(path.join(__dirname, '../writeTo/img.png'));
        var readStream = gfs.createReadStream({
            filename: req.files.file.name
        });

        readStream.pipe(write_fs);

        write_fs.on('close', function() {
            console.log('File has been written fully');
        });
    }, 15000);
}
