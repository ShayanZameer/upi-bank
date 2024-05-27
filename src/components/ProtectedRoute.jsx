import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, condition, redirectTo }) => {
  if (!condition) {
    return <Navigate to={redirectTo} replace />;
  }
  return children;
};

export default ProtectedRoute;
