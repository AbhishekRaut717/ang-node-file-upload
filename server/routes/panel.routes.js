
module.exports = function(app)
{
    var api = require('../controller/panel.api');
    var multer = require('multer');
    var upload = multer({
        dest: '../controller/uploads/'
    });

    

    app.post('/uploadPanel', upload.single('file'), api.uploadImage);
}