"use client"

import { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const userData = {
        user: {
          email: email,
          password: password,
        },
      };
  
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include other required headers based on your Devise-JWT configuration
          'access-token': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMGE1OGUzMS01MjRhLTRjNzQtOGI0NC0zZjYxZWY1YWVjNjIiLCJzdWIiOiIzYjMzOTJjMC01MmEwLTQ1MjctOTRkNi1jN2I1MzIzMWFhNDEiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE3MDQwNjAxMzMsImV4cCI6MTcwNDA2MTkzM30.xu144seK1fqx8EGwe6JZ2fKd-p6tE0g7pRtCZn3gEw4', // Replace with the actual token
          // 'client': 'your-client-id',           // Replace with the actual client ID
          // 'expiry': 'your-token-expiry',        // Replace with the actual token expiry
          // 'uid': 'user@example.com',            // Replace with the actual UID (email)
        },
        body: JSON.stringify(userData),
      });
  
      // Ensure the request was successful (status code 2xx)
      if (response.ok) {
        const responseData = await response.json();
        // Handle the response, update state, or perform other actions on successful login
        console.log('Login successful:', responseData);
      } else {
        // Handle the error (e.g., display an error message to the user)
        console.error('Login error:', response.statusText);
      }
    } catch (error) {
      // Handle any other errors
      console.error('Login error:', error);
    }
  };
  
  const logout = async () => {
    try {
      await axios.delete('http://localhost:4000/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
