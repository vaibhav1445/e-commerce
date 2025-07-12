const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');

const sampleProducts = [
  {
    name: 'Wireless Headphones',
    description: 'High quality wireless over-ear headphones.',
    price: 129.99,
    image: 'https://dummyimage.com/300x200/000/fff&text=Headphones',
  },
  {
    name: 'Smartwatch Series 7',
    description: 'Advanced features with health monitoring.',
    price: 199.99,
    image: 'https://dummyimage.com/300x200/007bff/ffffff&text=Smartwatch',
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Loud and clear sound in a compact size.',
    price: 49.99,
    image: 'https://dummyimage.com/300x200/28a745/ffffff&text=Speaker',
  },
  {
    name: 'Portable SSD 1TB',
    description: 'Fast and reliable storage on the go.',
    price: 99.99,
    image: 'https://dummyimage.com/300x200/6f42c1/ffffff&text=SSD',
  },
  {
    name: 'Gaming Mouse',
    description: 'High DPI customizable gaming mouse.',
    price: 39.99,
    image: 'https://dummyimage.com/300x200/f39c12/ffffff&text=Mouse',
  },
  {
    name: 'Mechanical Keyboard',
    description: 'Tactile keys with RGB lighting.',
    price: 89.99,
    image: 'https://dummyimage.com/300x200/dc3545/ffffff&text=Keyboard',
  },
  {
    name: '4K Monitor 27"',
    description: 'Crisp and vibrant 4K UHD display.',
    price: 299.99,
    image: 'https://dummyimage.com/300x200/17a2b8/ffffff&text=Monitor',
  },
  {
    name: 'Fitness Tracker',
    description: 'Track your steps, heart rate, and sleep.',
    price: 59.99,
    image: 'https://dummyimage.com/300x200/ffc107/000000&text=Tracker',
  },
  {
    name: 'Noise Cancelling Earbuds',
    description: 'Immersive sound with noise reduction.',
    price: 79.99,
    image: 'https://dummyimage.com/300x200/343a40/ffffff&text=Earbuds',
  },
  {
    name: 'Webcam 1080p',
    description: 'Perfect for video conferencing and streaming.',
    price: 69.99,
    image: 'https://dummyimage.com/300x200/20c997/000000&text=Webcam',
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('✅ 10 Products added successfully!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('❌ Failed to seed products:', err.message);
  });
