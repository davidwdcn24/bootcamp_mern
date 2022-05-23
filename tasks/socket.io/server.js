const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

const io = require("socket.io")(server, {
    cors: {
        origin: '*',
    }
});
io.on("connection", socket => {
    console.log("Encantado de conocerte. (Estrechar la mano)");
    socket.on("welcome", data => {
        socket.broadcast.emit("welcome", data);
    })
})