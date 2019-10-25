var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.locals.pretty = true;

// 등록된 템플릿 엔진 중에서 application에서 사용할 엔진을 지정한다.
// 템플릿 파일이 있는 경로를 지정한다.
app.set('view engine', 'pug');
app.set('views', './views') 

// application에 등록
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))

//pug template test
app.get('/templatetest', function(req, res){
    res.render('temp', {time : Date(), _title : 'pug'});
});

// querystring test
app.get('/querytest', function(req, res){
    var topics = [
        'javascript',
        'nodejs',
        'express'
    ];
    var output =`<html>
        <a href="/querytest?id=0">javascript</a><br>
        <a href="/querytest?id=1">nodejs</a><br>
        <a href="/querytest?id=2">express</a><br>
        ${topics[req.query.id]}
    `
    res.send(output);
});

// symenticUrl test
app.get('/symenticurltest/:id/:name', function(req, res){
    var topics = [
        'javascript',
        'nodejs',
        'express'
    ];
    var output =`<html>
        <a href="/querytest?id=0">javascript</a><br>
        <a href="/querytest?id=1">nodejs</a><br>
        <a href="/querytest?id=2">express</a><br>
        ${topics[req.params.id]}
        ${req.params.name}
    `
    res.send(output);
});

// get vs post
app.get('/form', function(req, res){
    res.render('form')
});

app.get('/form_receiver', function(req, res){
    res.send(req.query.title + ',' + req.query.description)
})

app.post('/form_receiver', function(req, res){
    res.send(req.body.title + ',' + req.body.description)
    
    
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
