const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", (socket) => {
    socket.emit("welcome", "hello dear user ...");
    console.log("New Client is Connected ...");
});

http.listen(port, () => {
    console.log("Server is listening on 127.0.0.1:" + port);
});