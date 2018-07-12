var Panel = require('../model/panel.model');
var fs = require('fs');
var Binary = require('mongodb').Binary;
var MongoClient = require('mongodb').MongoClient;


exports.uploadImage = function(req, res)
{
   console.log(req.file);
   
   fs.readFile(req.file.path, function(err, data) {
       if(err) throw err;

       console.log('the data is ', data);
      // generateObjectFromGff(data);
       
   })


}