import React from 'react';
import { authenticateUser } from '../services/piAuth';

const LoginButton = () => {
  const handleLogin = async () => {
    const userId = prompt("Enter your Pi Network User ID:");
    const authToken = prompt("Enter your Pi Network Auth Token:");

    const result = await authenticateUser(userId, authToken);
    if (result.success) {
      alert("Login successful!");
    } else {
      alert("Login failed!");
    }
  };

  return <button onClick={handleLogin}>Login with Pi Network</button>;
};

export default LoginButton;
