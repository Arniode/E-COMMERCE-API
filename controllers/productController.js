const Product = require('../models/ProductModel');

// 1. GET ALL PRODUCTS (The Catalog)
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Find everything in the database
        res.status(200).json({ status: "success", results: products.length, data: products });
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
};

// 2. CREATE A NEW PRODUCT (Admin only)
exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body); // Save to database
        res.status(201).json({ status: "success", data: newProduct });
    } catch (err) {
        res.status(400).json({ status: "error", message: "Check your data format" });
    }
};