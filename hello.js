const express = require('express');
var routes = express();

routes.use(express.static('assets'));

routes.listen(900);