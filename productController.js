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


// Function to UPDATE a product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ status: "Success", data: product });
    } catch (err) {
        res.status(400).json({ status: "Fail", message: err.message });
    }
};

// Function to DELETE a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ status: "Success", message: "Product deleted successfully" });
    } catch (err) {
        res.status(400).json({ status: "Fail", message: err.message });
    }
};