const express = require('express');

const app = express();
function auth(){
    console.log("helo fijhfgohdg");
    res.send("kkkk");
}
app.use('/files',express.static(__dirname + '/assets'));//used to take static .css or .html files and export it on server.
app.get('/', function(req, res){
    res.send("hello world");
})

app.get('/alien', function(req, res){
    const id = req.query.id;
    const name = req.query.name;
    if(id == 1){
        res.send("hello" + name);
    }
    else if(id == 2){
        res.send("hello" + name);
    }

    else if(id == 3){
        res.send("hello" + name);
    }
    else if(id == 4){
        res.send("hello" + name);
    }
    
})

app.get('/abc/:id([0-5]{3})', function(req, res){//inclusive, range of number should be between 0 and 5 and it should be a 3 digit number
    res.send("when do we go for dinner, ladies");
})

app.get('/alien/:id/:name', function(req, res){
    const id = req.params.id;
    const name = req.params.name;
    if(id == 1){
        res.send("hello" + name);

    }
    else if(id == 2){
        res.send("hello" + name);
    }

    else if(id == 3){
        res.send("hello" + name);
    }
    else if(id == 4){
        res.send("hello" + name);
    }
})




app.listen(9000);