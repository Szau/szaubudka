const http = require('http');

const requestHandler = (request, Response) => {
    Response.end('tu server node js');
}

const server =http.createServer(requestHandler);
server.listen(8000);