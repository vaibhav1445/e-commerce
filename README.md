# 🛒 Grabify - Full Stack E-Commerce Platform

A modern full-stack e-commerce web application built using **MERN Stack**, integrated with **Google OAuth**, secure **user authentication**, **product management**, **shopping cart**, and **order tracking**.

## 🚀 Live Demo
> Coming soon...

---

## 🛠️ Tech Stack

### 🔧 Frontend
- **React.js** with **Vite**
- **React Router** for navigation
- **Framer Motion** for animations
- **React Context API** for global cart management
- **React Toastify** for elegant notifications
- **Tailwind CSS** for responsive, utility-first design

### 🔧 Backend
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Passport.js** for authentication
- **Google OAuth 2.0** integration
- **Express Session** for user session handling
- **CORS**, **dotenv**, **cookie management**, etc.

---

## 🔐 Features

### 👤 Authentication
- Google OAuth 2.0 login
- Session-based user login/logout
- Private routes using token validation

### 🛍️ Product Management
- View all available products from the backend
- Sample dummy products added to database
- Products include name, image, price, description, stock, and category

### 🛒 Cart System
- Add/remove products to cart
- Modify product quantity
- Cart item count and total shown in real-time

### 💳 Checkout & Orders
- Place orders from cart
- Provide shipping address
- Orders are saved in MongoDB
- Orders linked to authenticated user

### 📦 My Orders
- Users can view all their placed orders
- View order date, products, quantity, and total amount

---

## 📂 Project Structure

```
/backend
  /controllers
  /models
  /routes
  /config
  .env (not pushed)
  server.js

/frontend
  /components
  /pages
  /context
  App.jsx
  main.jsx
```

✅ Ensure `.env` is listed in `.gitignore` to prevent accidental leaks.

---

## 📦 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vaibhav1445/e-commerce.git
cd e-commerce
```

### 2️⃣ Install backend dependencies
```bash
cd backend
npm install
```

### 3️⃣ Install frontend dependencies
```bash
cd ../frontend
npm install
```

---

## 📌 Future Improvements

- 💸 Payment gateway integration (Razorpay or Stripe)
- 🧑‍💼 Admin panel for product management
- ⭐ Product reviews and ratings
- 🧾 Category filtering and sorting
- ❤️ Wishlist feature
