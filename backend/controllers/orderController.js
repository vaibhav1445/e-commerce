const Order = require('../models/Order');

// @desc    Place new order
// @route   POST /api/orders
// @access  Private
const placeOrder = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    const { items, total } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'No items provided' });
    }

    const newOrder = new Order({
      user: {
        name: req.user.name,
        email: req.user.email,
        id: req.user._id,
      },
      items,
      total,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Order creation error:', error); // 👈 This will show full error stack
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
};


// @desc    Get user's orders
// @route   GET /api/orders
// @access  Private
const getUserOrders = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    const orders = await Order.find({ 'user.email': req.user.email }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
};
