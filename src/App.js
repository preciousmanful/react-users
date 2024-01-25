import React, { useState } from 'react';
import Users from './Users';
import UsersForm from './UsersForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { name: 'Precious Adwoa', email: 'precious@example.com', gen: 25 },
    { name: 'Code Train', email: 'code@example.com', gen: 30 },
  ]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className="App">
      <div>
        <h1>React Users</h1>
        <Users users={users} />
        <UsersForm onAddUser={handleAddUser} />
      </div>
    </div>
  );
}

export default App;

