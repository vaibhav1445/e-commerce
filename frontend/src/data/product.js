// src/data/product.js
const productsData = [
  {
    _id: "1", // ✅ use _id and ensure it's unique
    name: "Smart Watch",
    description: "A modern smartwatch with multiple features.",
    price: 129.99,
    image: "https://dummyimage.com/300x200/5fa2dd/ffffff&text=Smart+Watch"
  },
  {
    _id: "2",
    name: "Bluetooth Speaker",
    description: "Loud and clear portable Bluetooth speaker.",
    price: 59.99,
    image: "https://dummyimage.com/300x200/5fbd82/ffffff&text=Bluetooth+Speaker"
  },
  {
    _id: "3",
    name: "Noise Cancelling Headphones",
    description: "Perfect sound experience.",
    price: 99.99,
    image: "https://dummyimage.com/300x200/ffcc00/000000&text=Headphones"
  },
  // Add more with unique _id
];

export default productsData;
