/**
 * demo-4
 * 使用 fs 模块返回 json 文件
 */
const fs = require("fs");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    /**
     * 更多 url 解析可以使用其他 node 原生模块
     * @example
     * var url = require('url');
     * var querystring = require('querystring');
     * var util = require('util');
     */
    console.log("Request for " + req.url + " received.");

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json;charset=utf-8");

    const readPath = './api/test.json';
    // const readPath = `./api${req.url}.json`;
    fs.readFile(readPath, (err, data) => {
        if (err) {
            res.end(String(err));
        } else {
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});