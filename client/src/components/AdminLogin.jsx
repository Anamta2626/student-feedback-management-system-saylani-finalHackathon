import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', credentials);
      localStorage.setItem('token', res.data.token);
      navigate('/admin/dashboard');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
