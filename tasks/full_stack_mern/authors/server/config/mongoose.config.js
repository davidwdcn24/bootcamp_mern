const mongoose = require('mongoose');
const config = require('./index.config');

mongoose.connect(config.URL_BDD + "authorsDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));