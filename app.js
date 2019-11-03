const io = require("socket.io-client");

let socketTest = io.connect("http://127.0.0.1:3000/test");

socketTest.on("welcome", (data) => {
    console.log("Received:" + data);
});

socketTest.emit("joinRoom", "musicians");
socketTest.on('newUser', (res) => { console.log(res); });
socketTest.on("err", (err) => { console.log(err); });
socketTest.on("success", (success) => { console.log(success); });