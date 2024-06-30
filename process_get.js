const express = require('express');
const app = express();

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + "/" + "index.html");
})

app.use('/process_get', (req, res, next)=>{

        first_name = req.query.first_name;
        last_name = req.query.last_name;

        if(first_name == "kanya" && last_name == "bhatt"){
            next();
        }
        else{
            res.send("incorrect firstname and lastname");
        }
    
    // res.end(Json.stringify(response));
})

app.get('/process_get', (req, res) => {

    console.log("correct!!!")
    res.sendFile(__dirname + "/" + "homepage.html");
})
app.listen(8000);