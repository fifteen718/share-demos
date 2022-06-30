/**
 * demo-3
 * 使用 fs 模块返回 html 文件
 */
const fs = require("fs");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  fs.readFile("./frontend/index.html", (err, data) => {
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