const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getUserOrders
} = require('../controllers/orderController');

// POST - Place Order
router.post('/', placeOrder);

// GET - Get User's Orders
router.get('/', getUserOrders);

module.exports = router;
