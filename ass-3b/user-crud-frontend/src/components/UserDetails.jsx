import { useEffect, useState } from 'react';
import API from '../api';

export default function UserDetails({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/users/${userId}`).then(res => setUser(res.data));
  }, [userId]);

  if (!user) return <p className="text-center text-gray-500">Loading user...</p>;

  return (
    <div className="bg-green-100 p-4 rounded shadow max-w-md mx-auto my-4">
      <h3 className="text-lg font-semibold">User Details</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
