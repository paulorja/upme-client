var express        = require('express');
var methodOverride = require('method-override');
var path           = require('path');
var app            = express();
var port           = process.env.PORT || 8080;
var sslRedirect = require('heroku-ssl-redirect');


// enable ssl redirect
app.use(sslRedirect());
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// set the static files location
app.use(express.static(__dirname + '/dist'));
// route to handle all angular requests
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(port);
