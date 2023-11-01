// Protected.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function Protected({ isSignedIn, children }) {
  if (!isSignedIn) {
    console.log("hello home");
    return <Navigate to="/home" />;
  }
  return children;
}

export default Protected;
