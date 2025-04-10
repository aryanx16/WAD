import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UserDetails from './components/UserDetails';
import UpdateUserForm from './components/UpdateUserForm';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <RegisterForm />
      <LoginForm onLogin={setUserId} />
      {userId && (
        <>
          <UserDetails userId={userId} />
          <UpdateUserForm userId={userId} />
        </>
      )}
    </div>
  );
}

export default App;
