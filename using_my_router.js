var express = require('express');
var app = express();
var routes = require('./my_routes.js');
// Mount the routes as middleware at path '/abc'
 app.use('/abc', routes);
app.listen(8000);