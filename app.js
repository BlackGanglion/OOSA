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
  /*
  request('http://127.0.0.1/test-api/typelist.php', function (error, response, body) {
    data = JSON.parse(body);
    if (!error && response.statusCode == 200 && data.status == 0) {
      res.render('type', {
        'title': 'api-test',
        'data': data
      });
    }
  });
  */
  res.render('index');
});

app.get('/milk-powder', function(req, res) {
  res.render('milk-powder');
});

app.get('/product1', function(req, res) {
  res.render('product1');
});

app.get('/leibie', function(req, res) {
  res.render('leibie');
});

app.get('/qixia', function(req, res) {
  res.render('qixia');
});

/*
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
*/

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
