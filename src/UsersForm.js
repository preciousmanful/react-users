import React, { useState } from 'react';

function UsersForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, gen: parseInt(gen) };
    onAddUser(newUser);
    console.log('New user:', newUser);
  };

  return (
    <div className='users-form'>
      <h2>Add New User:</h2>
      <form onSubmit={handleSubmit}>
        <table>
            <tr>
                <td><label>Name:</label></td>
                <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Precious Adwoa'/></td>
            </tr>
            <tr>
                <td><label>Email:</label></td>
                <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='precious@gmail.com'/></td>
            </tr>
            <tr>
                <td><label>Generation:</label></td>
                <td><input type="number" value={gen} onChange={(e) => setGen(e.target.value)} required placeholder='26' /></td>
            </tr>
        </table>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UsersForm;
