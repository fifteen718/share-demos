/**
 * demo-3
 * 使用 fs 模块返回 html 文件
 */
var fs = require('fs');
var http = require('http');
http.createServer(function (request, response) {
    // 设置 HTTP 头部 
    var header = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/html;charset=utf-8'
    }
    response.writeHead(200, header);
    fs.readFile('./frontend/index.html', (err, data) => {
        if (err) {
            response.end(String(err));
        } else {
            response.end(data);
        }
    });
}).listen(8888, 'localhost', () => {
    console.log('Server running at http://127.0.0.1:8888/ or http://localhost:8888/')
});