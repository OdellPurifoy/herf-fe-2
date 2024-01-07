"use client"

import { createContext, useContext, useState, useEffect } from 'react';

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
        },
        body: JSON.stringify(userData),
      });
  
      // Ensure the request was successful (status code 2xx)
      if (response.ok) {
        const { token, user: userData } = await response.json();

        localStorage.setItem('token', token);

        setUser(userData);
        console.log("USER!!", userData)
        console.log('Login Successful:', userData);
      } else {
        // Handle the error (e.g., display an error message to the user)
        console.error('Authentication Failed');
      }
    } catch (error) {
      // Handle any other errors
      console.error('Login error:', error);
    }
  };
  
  const logout = async () => {
    localStorage.removeItem('token');
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
