var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("request recieved.");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World!");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("server has started");
}

exports.start = start;


