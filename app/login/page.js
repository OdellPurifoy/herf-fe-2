"use client"

// pages/login.js
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
