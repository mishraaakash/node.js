var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead()
    res.write("<h1>RAIT</h1>");
    res.end("<h2>welcome to rait...</h2>");
  })
  .listen(8787);
