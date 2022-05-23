const express = require("express");
const cors = require('cors');
const expressWinston = require('express-winston');
const logger = require("./server/config/logger.config");

const app = express();

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const PlayerRoutes = require("./server/routes/players.routes");
PlayerRoutes(app);

app.use(expressWinston.errorLogger({
    winstonInstance: logger
}));

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);