const express = require('express');
const app = express();

function middleHandler(req, res, next) { 
    console.log("execute middle ware");
    next();
    console.log("hell");
}
app.use(function (req, res, next) {
    console.log("first middle ware");
    next(); 
});
app.use(function (req, res, next) {
    console.log("second middle ware");
    next(); 
});
app.get('/', middleHandler, function (req, res) {
    res.send("page render finished");
});

app.listen(8000);