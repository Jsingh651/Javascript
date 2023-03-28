const Products = require("../models/product.models");

module.exports.findAllProducts = (req, res) => {
    Products.find()
    .then((allProducts) => {
        res.json(allProducts)
    })
    .catch((err) =>{
        res.json({ message: 'Something went wrong', error: err })
    })
}
module.exports.findOne = (req, res) => {
    Products.findById(req.params.id)
    .then((oneProduct) => {
        res.json(oneProduct)
    })
    .catch((err) =>{
        res.json({ message: 'Something went wrong', error: err })
    })
}

module.exports.createOneProduct =(req, res) =>{
    console.log(req.body)
    Products.create(req.body)
    .then(newProduct => {
        res.status(200).json(newProduct)
    })
    .catch((err) =>{
        res.json({ message: 'Something went wrong', error: err })
    })
}
module.exports.updateOneProduct = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(updateProducts => res.json({ product: updateProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteOneProduct = (req, res) => {
    Products.findByIdAndDelete(req.params.id)
    .then(deleteProduct => res.json({ product: deleteProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};