const http = require('http');

const hostname= '127.0.0.1';
const port = 1337;


var server = http.createServer(function(requset,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');
});

server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}`);
})