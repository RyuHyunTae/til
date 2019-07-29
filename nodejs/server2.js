var http = require('http'); //서버 모듈
var fs = require('fs'); //파일시스템 모듈

//404

function send404Response(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 Error: Opps!!!");
    response.end();
}

//응답
function onRequest(request,response){

    if(request.method == 'GET'&&request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        //없는 파일을 찾는경우
        send404Response(response);
    }
}


http.createServer(onRequest).listen(8888);
console.log("서버가 돕니다");