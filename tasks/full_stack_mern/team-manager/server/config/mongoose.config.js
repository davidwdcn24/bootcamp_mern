const mongoose = require('mongoose');
const config = require('./index.config');
const logger = require("./logger.config");

mongoose.connect(config.URL_BDD + "teamManagerDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Established a connection to the database");
        logger.info("Established a connection to the database.");
    })
    .catch(err => {
        logger.log("error", "Unexpected error has ocurred. Something went wrong when connecting to the database. %s", err.message, err);
        console.log("Unexpected error has ocurred. Something went wrong when connecting to the database.", err);
    });