import { useState } from 'react';
import API from '../api';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/register', form);
      alert('Registered: ' + res.data.name);
    } catch (err) {
      alert('Error: ' + err?.response?.data?.msg || 'Failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded mb-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <input className="input" type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input" type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="input" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="btn-primary w-full">Register</button>
    </form>
  );
}
