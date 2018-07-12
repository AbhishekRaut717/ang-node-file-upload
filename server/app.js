var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');


var mongoose = require('mongoose');

var app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

var dbConfig = require('./config/db.config');

mongoose.connect(dbConfig.localUrl);

mongoose.connection.on('error', (err) => {
    console.log(err);
    process.exit();
});

mongoose.connection.on('open', function() {
    console.log('We are live on DB');
});

require('./routes/panel.routes')(app);
//require('./routes')

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
