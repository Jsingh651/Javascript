const ProductController = require("../controllers/product.controllers")

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createOneProduct);
}