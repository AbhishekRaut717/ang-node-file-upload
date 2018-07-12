
module.exports = function(app)
{
    var api = require('../controller/panel.api');
    var multiparty = require('connect-multiparty')();

    app.post('/uploadPanel', multiparty, api.uploadImage);
}