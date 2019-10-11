var express = require('express');
var fs = require('fs');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    
    fs.readFile("./teste.html", function(err, data){
        res.end(data);
    });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });