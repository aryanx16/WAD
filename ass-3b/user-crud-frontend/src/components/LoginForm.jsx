import { useState } from 'react';
import API from '../api';

export default function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      alert('Logged in');
      onLogin(res.data.user._id);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded mb-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <input className="input" type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="input" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="btn-primary w-full">Login</button>
    </form>
  );
}
