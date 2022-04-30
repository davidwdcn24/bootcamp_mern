const ProductController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products/", ProductController.getAll);
    app.get("/api/products/:id", ProductController.getOne);
    app.post("/api/products/add", ProductController.createProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
};