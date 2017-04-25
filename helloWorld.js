var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var path = require('path');
require('dotenv').config;

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/getNewImage',
	function(req, res) {
		var options = {
	      url: 'https://api.gettyimages.com/v3/search/images?phrase='+req.body.query,
          headers: {
            'Api-Key': '2e8sjc2rj42fm62y9sdp8hbz'
          }
        }
		console.log(req.body.query) //mountain
		request(options, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("success!")
			res.send(body);
		} else {
			console.log("error!!!!!!!!!");
			res.send(error)
		}
	});
});

module.exports = app;