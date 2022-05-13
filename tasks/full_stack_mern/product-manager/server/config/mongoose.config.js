const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://usrProductManager:123ProductManager123@clusterdcproductmanager.srtd9.mongodb.net/productManagerDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));