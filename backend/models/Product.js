const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'general'
  },
  stock: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
