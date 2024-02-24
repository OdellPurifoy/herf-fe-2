'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [initialized, setInitialized] = useState(false) // Add a new state to track initialization

  useEffect(() => {
    // Check if user data is already initialized
    if (!initialized) {
      // Check for user data in localStorage during component initialization
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      // Set initialized to true to prevent re-initialization
      setInitialized(true)
    }
  }, [initialized]) // Run the effect only when the initialized state changes

  const login = async (email, password) => {
    try {
      const userData = {
        user: {
          email: email,
          password: password,
        },
      }

      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      // Ensure the request was successful (status code 2xx)
      if (response.ok) {
        const { token, user: userData } = await response.json()

        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(userData))
        setUser(userData)
        console.log('USER!!', userData)
        console.log('Login Successful:', userData)
      } else {
        // Handle the error (e.g., display an error message to the user)
        console.error('Authentication Failed')
      }
    } catch (error) {
      // Handle any other errors
      console.error('Login error:', error)
    }
  }

  const logout = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
