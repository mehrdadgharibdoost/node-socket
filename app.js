const io = require("socket.io-client");

let socket = io.connect("http://127.0.0.1:3000");

socket.on("welcome", (data) => {
    console.log("Received:" + data);
});