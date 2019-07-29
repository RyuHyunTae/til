var express = require('express');
var app = express();
var bodyParser = require('body-parser');  //post방식

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public')); //정적인 파일을 제공하는 방법


app.set('view engine', 'ejs');
app.set('views', './views');



app.get('/',function(request,response){
    response.send('Hello home Page');
});//get방식

app.get('/topic',function(request,response){
    var topics =[
        'javaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    
    var as = `
    <a href="/topic?id=0">j</a><br>
    <a href="/topic?id=1">n</a><br>
    <a href="/topic?id=2">e</a><br>
    ${topics[request.query.id]}
    `
    response.send(as);
});

app.get('/topic/:id/:mode',function(request,response){
    response.send(request.params.id+','+request.params.mode);
});

app.get('/dynamic',function(request,response){
    var lis='';
    for(var i=0;i<5;i++){
        lis = lis +'<li>coding</li>';
    }

    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello Dynamic
        <ul>
        ${lis}
        </ul>
    </body>
    </html>`
    response.send(output);
});

app.get('/login',function(request,response){
    response.send('<h1>Login please</h1>');
});

app.get('/route',function(request,response){
    response.send('Hello Router, <img src="/route.jpg">');
});


app.get('/form',function(request,response){
    response.render('view');
});

app.get('/form_receiver',function(request,response){
    var text = request.query.text;

    response.send(text);
})
app.post('/form_receiver',function(request,response){
    var text = request.body.text;

    response.send(text);
});

app.listen(3000,function(){   //포트번호  올바르게 접속시 함수호출
    console.log('Connected 300 port!');
});



