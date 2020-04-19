var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('index');
});
app.get('/contact', function(req,res){
    res.render('contact');
});
app.get('/profile/:id', function(req,res){
    res.render('profile');
});
app.post('/profile/:id', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('profile-success', {data:req.body});
});

app.listen(5500);