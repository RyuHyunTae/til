var connect = require('connect');
var http = require('http');

var app = connect();

function doOne(request,response,next){
    console.log("do one");
    next();
}

function doTwo(request,response){
    console.log("do two");
}

app.use(doOne);
app.use(doTwo);

http.createServer(app).listen(8888);
console.log("서버가 작동중 입니다");

