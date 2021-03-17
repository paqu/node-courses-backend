const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
