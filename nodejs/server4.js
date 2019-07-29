var connect = require('connect');
var http = require('http');
var app = connect();

function about(request,response){
    console.log('사용자가 어바웃 페이지 요청')
}

function email(request,response){
    console.log('사용자가 이메일 페이지 요청')
}

app.use('/about',about);
app.use('/email',email);


http.createServer(app).listen(8888);
console.log("서버가 작동중 입니다");
