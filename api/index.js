const http = require('http');

const server = http.createServer((req, res) => {
    res.end('toto');
})

server.listen(process.env.port || 3000);
