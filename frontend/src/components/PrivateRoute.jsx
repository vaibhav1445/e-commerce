// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/auth/me', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setChecking(false);
      })
      .catch(() => {
        setUser(null);
        setChecking(false);
      });
  }, []);

  if (checking) return <Loader />;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
