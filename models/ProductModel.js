const mongoose = require('mongoose');

// This defines what information every product MUST have
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String },
    stock: { type: Number, default: 0 },
    description: { type: String }
});

module.exports = mongoose.model('Product', productSchema);