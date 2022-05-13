const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors/", AuthorController.getAllAuthors);
    app.get("/api/authors/:id", AuthorController.getAuthor);
    app.post("/api/authors/", AuthorController.createAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};