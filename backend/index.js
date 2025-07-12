// index.js

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
require('./config/passport');

const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// ✅ CORS Middleware (must come before any routes)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// ✅ JSON parser
app.use(express.json());

// ✅ Session Middleware
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,       // ✅ must be false for HTTP (local dev)
    sameSite: 'lax'      // ✅ helps session cookie send correctly
  }
}));

// ✅ Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});
app.use('/api/products', productRoutes);
app.use('/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// ✅ Connect DB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));
