import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="p-4">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">Welcome to Grabify</h1>
        <p className="text-lg text-gray-600">Discover the latest and greatest in our product lineup</p>
      </section>

      <ProductList />
    </div>
  );
};

export default Home;
