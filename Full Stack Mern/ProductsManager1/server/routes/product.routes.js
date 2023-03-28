const ProductController = require("../controllers/product.controllers")

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/product/:id", ProductController.findOne);
    app.put("/api/product/update/:id", ProductController.updateOneProduct);
    app.delete("/api/product/delete/:id", ProductController.deleteOneProduct);
}