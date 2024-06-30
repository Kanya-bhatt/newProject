var express = require('express');
var app = express();

app.use('/abc', (req, res, next)=>{
    console.log(new Date().toString());
    console.log("hello before");

    setTimeout(()=> {
        res.send('/ function selected');

    }, 3000);
    console.log("hello middle");
    next();
    console.log("hello after");
});

app.use('/abc', (req, res, next)=>{
    console.log("2");
    next();
    console.log("3");


})

app.get('/abc', (req, res, next)=>{
    console.log("3");
    next();
    console.log("3");
    
    
})
app.get('/abc', (req, res)=>{
    
   console.log('4');
    
})
app.listen(8000);