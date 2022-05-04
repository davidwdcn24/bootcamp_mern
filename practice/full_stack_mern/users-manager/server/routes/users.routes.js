const UserController = require("../controllers/users.controller");

module.exports = app => {
    app.get("/api/users/", UserController.getAllUsers);
    app.get("/api/users/:id", UserController.getUser);
    app.post("/api/users/", UserController.createUser);
    app.put("/api/users/:id", UserController.updateUser);
    app.delete("/api/users/:id", UserController.deleteUser);
};