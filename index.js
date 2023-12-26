var http = require("http");
var data = require('./test')
var url = require('url');

http.createServer(function (req, res) {
    // res.writeHead(200,{'Content-Type': 'text/html'})
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("<h1>RAIT</h1>" + data.testModule())
    res.write("<br>")
    var query = url.parse(req.url,true).query;
    console.log(query)
    res.end("<h3>welcome to rait...</h3>")
  }).listen(8787);


