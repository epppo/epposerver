const http = require("http");
const cluster = require("cluster");

const numCPUs = require("os").cpus().length;
console.log(numCPUs);

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, { "Set-Cookie": "mycookie=test" });
  res.write("<h1>cookie!</h1>");
});
server.listen(8080);
server.on("listening", () => {
  console.log("8080 포트에서 요청 대기중");
});
server.on("error", (error) => {
  console.error(error);
});

// const server2 = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   res.write("<h1>hello node!</h1>");
//   res.end("<p>hello Server!</p>");
// });

// server2.listen(8081);
// server2.on("listening", () => {
//   console.log("8081 포트에서 요청 대기중");
// });
// server2.on("error", (error) => {
//   console.error(error);
// });
