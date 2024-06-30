var express = require('express'); 
var app1 = express();
app1.get('/', function (req, res) {
    res.send('Hello GET');
 })
app1.post('/', function (req, res) { 
    res.send('Hello POST');
})

app1.delete('/del_user', function (req, res) { 
    res.send('Hello DELETE');
})
app1.get('/list_user', function (req, res) {
    res.send('Page Listing'); })
app1.get('/ab*cd', function(req, res) { 
    res.send('Page Pattern Match');
})

app1.listen(9000);