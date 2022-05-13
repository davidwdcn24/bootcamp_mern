const dotenv = require("dotenv");
dotenv.config();

const config = {
    URL_BDD: process.env.CONECTION_URL_DBB
};

module.exports = config;