const http = require("http");

const server = http.createServer((req, res) => {
  let body = [];

  if (req.method === "POST" && req.url === "/echo") {
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        res.end(body);
      });
  }
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
