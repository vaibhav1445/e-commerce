// src/pages/Login.jsx
import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to Grabify</h1>
        <p className="mb-6 text-gray-600">Please login to continue</p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
