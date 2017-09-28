const http = require("http");
const _ = require("lodash");
const handler = require("./httpHandler");


const server = http.createServer(handler.main);

server.listen(3000);
