const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/b', (req, res, next)=>{
    throw new Error('b failed');
});

app.use('/b', (err, req, res, next)=>{
    console.log('/b : error detected and passed on');
    next(err);

});

app.use((err, req, res, next)=>{
    console.log('unhandled error: ' + err.message);
    res.send('500 server error');
});

app.listen(8000);