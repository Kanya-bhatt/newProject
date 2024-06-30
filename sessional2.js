const express = require('express')
const app = express();

const users = [
    {id: 1, name: 'kanya'},
    {id: 2, name: 'kriti'},
    {id: 3, name: 'ranjana'}
]

app.get('/form1.html', (req, res) => {
    res.sendFile(__dirname + "/" + "form1.html");
})

app.get("/addUser", (req, res) => {
    const id1 = req.query.id;
    const name1 = req.query.name;

    const obj = {
        id: id1,
        name: name1
    }
    users.push(obj);

    res.send(users);
})


app.get('/getUsers', (req, res) => {
    res.send(users);
});

app.get('/CheckUser/:id', (req, res) => {
    var id = req.params.id;
    var status = 1;
    var index = 0;

    for(var i = 0; i < users.length; i++){
        if(id == users[i].id){
            status = 0;
            index = i;
            break;
        }
    }
    if(status == 0){
        res.send(users[index]);
    }

    else{
        res.send("incorrect input");
    }
    
});

app.listen(3000, () => {
    console.log("server listing on port 3000" + " localhost:3000/form1.html");
});