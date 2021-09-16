const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Product content is required!"],
        min: [3,"Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required:[true, "Price is required"],
    },
    description: {
        type: String,
        required:[true, "Description required."],
        min: [5, "Description must be at least 5 characters."]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;