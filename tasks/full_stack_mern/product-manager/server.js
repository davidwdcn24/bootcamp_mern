const express = require("express");
const cors = require('cors');

const app = express();

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

const ProductRoutes = require("./server/routes/products.routes");
ProductRoutes(app);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);