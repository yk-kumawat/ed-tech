import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = () => {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
