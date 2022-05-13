const express = require("express");
const cors = require('cors');

const app = express();

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const AuthorRoutes = require("./server/routes/authors.routes");
AuthorRoutes(app);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);