const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/ProductModel');

dotenv.config();

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('🚛 Delivery truck connected to the database...'))
    .catch(err => console.log('❌ Connection Error:', err));

const products = [
    // Electronics
    { name: "iPhone 15 Pro Max", price: 1450000, category: "Phones", brand: "Apple", stock: 10, description: "256GB, Titanium Blue" },
    { name: "Samsung S24 Ultra", price: 1300000, category: "Phones", brand: "Samsung", stock: 15, description: "AI Integrated Smartphone" },
    { name: "MacBook Pro M3", price: 2100000, category: "Computing", brand: "Apple", stock: 5, description: "14-inch, 16GB RAM" },
    { name: "Sony WH-1000XM5", price: 450000, category: "Accessories", brand: "Sony", stock: 30, description: "Noise cancelling headphones" },
    
    // Home & Appliances
    { name: "Haier Thermocool Freezer", price: 320000, category: "Appliances", brand: "Haier", stock: 12, description: "Large chest freezer" },
    { name: "LG Smart TV 55 inch", price: 580000, category: "Electronics", brand: "LG", stock: 8, description: "4K UHD Smart LED TV" },
    { name: "Scanfrost Gas Cooker", price: 185000, category: "Appliances", brand: "Scanfrost", stock: 20, description: "4 Burners + Oven" },
    
    // Fashion
    { name: "Nike Jordan 1 Retro", price: 120000, category: "Fashion", brand: "Nike", stock: 50, description: "High-top basketball sneakers" },
    { name: "Designer Agbada Set", price: 65000, category: "Fashion", brand: "Local", stock: 100, description: "Hand-stitched luxury wear" },
    
    // Generating the rest to reach 200
    ...Array.from({ length: 185 }).map((_, i) => ({
        name: `Jumia Market Item ${i + 1}`,
        price: Math.floor(Math.random() * 80000) + 2000,
        category: i % 3 === 0 ? "General" : i % 3 === 1 ? "Groceries" : "Health & Beauty",
        brand: "Market Choice",
        stock: 40,
        description: "A high-quality product verified by our distribution team."
    }))
];

const importData = async () => {
    try {
        await Product.deleteMany(); // Clears old data so you don't have duplicates
        await Product.insertMany(products);
        console.log('✅ SUCCESS: 195 PRODUCTS LOADED INTO JUMIA-CLONE DATABASE!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

importData();