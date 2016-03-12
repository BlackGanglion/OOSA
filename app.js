var express = require('express');
var path = require('path');
var request = require('request');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  request('http://127.0.0.1:3000/api/type.json', function (error, response, body) {
    data = JSON.parse(body);
    if (!error && response.statusCode == 200 && data.status == 0) {
      res.render('index',{
        type: data.type
      });
    }
  });
});

app.get('/product/:id', function(req, res) {
  res.render('product' + req.params.id);
});

app.get('/type', function(req, res) {
  if(req.query.id == 1) {
    res.render('milk-powder');
  }
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
