const express = require("express");
const app = express();
const socketio = require("socket.io");

const namespaces = require("./data/namespaces");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);
const io = socketio(expressServer);

io.on("connect", (socket) => {
  socket.emit("welcome", "Welcome to the Server");
  socket.on("clientConnect", () => {
    console.log(socket.id, "has connected to the server");
  });
  socket.emit("nslist", namespaces);
});
