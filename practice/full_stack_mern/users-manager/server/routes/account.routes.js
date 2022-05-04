const AccountController = require("../controllers/accounts.controller");

module.exports = app => {
    app.post("/api/account/login", AccountController.login);
    app.put("/api/account/:id", AccountController.activate);
};