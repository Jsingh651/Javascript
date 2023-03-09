const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title:{type:String, 
        required: [true, "Title is required"], 
        minlength:[3, "3 Length is required"]},
    
    price: {type:Number, 
        min:[1, "Price must be more than one"]},
        
    description:{type: String}
}, {timestamps:true}
);

module.exports = mongoose.model("Products", ProductsSchema);
