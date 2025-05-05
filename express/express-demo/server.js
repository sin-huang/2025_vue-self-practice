// 使用node的http module搭建後端服務
const http = require('http');

const server = http.createServer(function (req, res){
    console.log('URL :', req.url);
    console.log('Method :', req.method);
    console.log('Headers :', req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World');
});

server.listen(3000,function(){
    console.log('Server running on http://localhost:3000');
})