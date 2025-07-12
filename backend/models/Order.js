const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: Object, // Stores name, email, id (not referencing User model)
    required: true,
  },
  items: [
    {
      _id: String,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    }
  ],
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Order', orderSchema);
