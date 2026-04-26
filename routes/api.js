const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');

// AUTH ROUTES
router.post('/register', authController.register);
router.post('/login', authController.login);

// PRODUCT ROUTES
router.get('/products', productController.getAllProducts); // Everyone can see products
router.post('/products', protect, productController.createProduct); // Only logged in users can add

module.exports = router;