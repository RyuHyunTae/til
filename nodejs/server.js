var http = require('http'); //서버 모듈


//응답처리
function onRequest(request,response){
    console.log("사용자가 request 합니다" + request.url);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("this is my webserver");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("서버가 돕니다");
