const express = require("express"); //express框架模块
const path = require("path"); //系统路径模块
const fs = require("fs"); //文件模块

// 创建 express 的服务器实例
const app = express();

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json());
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }));

//设置允许跨域请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //访问控制允许来源：所有
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //访问控制允许报头 X-Requested-With: xhr请求
  res.header("Access-Control-Allow-Metheds", "PUT, POST, GET, DELETE, OPTIONS"); //访问控制允许方法
  res.header("X-Powered-By", "nodejs"); //自定义头信息，表示服务端用nodejs
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//创建get接口
app.get("/api/*", (req, res) => {
  // http://expressjs.jser.us/3x_zh-cn/api.html#req.params
  console.log(">>>>> req");
  console.log(req.url);
  console.log(req.path);
  console.log(req.query);

  //文件路径，__dirname为当前运行js文件的目录
  const file = path.join(__dirname, `${req.path}.json`);
  fs.readFile(file, "utf-8", function (err, data) {
    if (err) {
      res.send("文件读取失败");
    } else {
      res.send(data);
    }
  });
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, () => {
  console.log(
    "Express server running at http://127.0.0.1:8888/ or http://localhost:8888/"
  );
});
