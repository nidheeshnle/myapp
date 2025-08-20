const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end("Hello, GitHub Actions CI/CD!");
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`App running on port ${port}`);
});
