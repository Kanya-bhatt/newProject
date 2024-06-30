var express = require('express'); 
var router = express.Router(); 
router.get('/', function(req, res){
    res.send('GET route on /abc'); });
    router.get('/pqr', function(req, res){ 
        res.send('POST route on /abc/pqr');
    });
module.exports = router;