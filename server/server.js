// *********************************************************
//                      Dependencies 
// *********************************************************

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const koalaRouter = require('./routes/koala.router');

// *********************************************************
//                      Middleware 
// *********************************************************

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//Routes 
app.use('/koala', koalaRouter);

// *********************************************************
//                      Server Listener 
// *********************************************************

var port = process.env.PORT || 5000;
// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});
