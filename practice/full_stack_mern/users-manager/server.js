const express = require("express");
const cors = require('cors');

const app = express();

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const UserRoutes = require("./server/routes/users.routes");
UserRoutes(app);

const AccountRoutes = require("./server/routes/account.routes");
AccountRoutes(app);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);