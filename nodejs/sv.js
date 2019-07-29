var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000,function(){   //포트번호  올바르게 접속시 함수호출
    console.log('Connected 300 port!');
});

app.get('/topic',function(request,response){
    response.render('topic');
});

app.post('/topic',function(request,response){
    
})

app.get('/new',function(request,response){
    response.render('new');
});