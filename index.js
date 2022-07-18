require('dotenv').config();

const {createServer} = require('http');

const app = require('./app');

const port = process.env.PORT || 5050;

const server = createServer(app);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});