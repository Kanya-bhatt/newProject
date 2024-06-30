var express = require('express');
var app = express();

app.use((req, res, next) => {
    req.reqTime = new Date().toString();
    res.send("hello");
});

// app.get('/', (req, res)=> {
//     res.send('hello world '+req.reqTime);
// })
app.listen(8000);