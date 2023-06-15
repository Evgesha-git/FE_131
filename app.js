const http = require('http');

http.createServer(function (req, resp) {
    resp.end('Hello World');
}).listen(3000, '127.0.0.1', function () {
    console.log('Начали прослушивать порт 3000');
});