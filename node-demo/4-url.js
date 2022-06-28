/**
 * demo-4
 * 使用 fs 模块返回 json 文件
 */
var fs = require('fs');
var http = require('http');
http.createServer(function (request, response) {
    // 接收并输出 请求url
    const url =  request.url;
    console.log("Request for " + url + " received.");

    // 设置 HTTP 头部 
    var header = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8'
    }
    response.writeHead(200, header);

    const responseData = './api/test.json';
    // const responseData = `./api${url}.json`;
    /**
     * 更多 url 解析可以使用其他 node 原生模块
     * @example
     * var url = require('url');
     * var querystring = require('querystring');
     * var util = require('util');
     */
    fs.readFile(responseData, (err, data) => {
        if (err) {
            response.end(String(err));
        } else {
            response.end(data);
        }
    });
}).listen(8888, 'localhost', () => {
    console.log('Server running at http://127.0.0.1:8888/ or http://localhost:8888/')
});