'use strict';

var express = require('express'); 
var request = require('request');

// Urls for App Center REST functions
var apikey = '5d7ef6bae3b0c6d5c3109da5d61767fc';
var url = 'https://api.darksky.net/forecast/'+ apikey +'/25.6667,-100.3167';
var app = express();

app.set('view engine', 'jade');
app.set('views',__dirname + '/templates');



app.set('port', (process.env.PORT || 3000));



/* TEST: function to GET report list */
app.get('/api', function(req, res){
  request({
    url: url,
    json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.render('index',{forecast:body})
    }
  })
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});












