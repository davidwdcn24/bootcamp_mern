const ProductController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products/", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getProduct);
    app.post("/api/products/add", ProductController.createProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
};