import { useState } from 'react';
import API from '../api';

export default function UpdateUserForm({ userId }) {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put(`/users/${userId}`, form);
      alert('Updated: ' + res.data.name);
    } catch (err) {
      alert('Update failed');
    }
  };

  return (
    <form onSubmit={handleUpdate} className="bg-white p-6 shadow rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Update User</h2>
      <input className="input" type="text" placeholder="New Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input" type="email" placeholder="New Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <button className="btn-primary w-full">Update</button>
    </form>
  );
}
