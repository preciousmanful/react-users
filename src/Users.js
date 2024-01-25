import React from 'react';

function Users({ users }) {
  return (
    <div className='users-container'>
      <h2>User List</h2>
      <div className='users'>
        {users.map((user, index) => (
          <table>
            <tr>
                <td>Name:</td> 
                <td>{user.name}</td>
            </tr> 
            <tr>
                <td>Email:</td> 
                <td>{user.email}</td>
            </tr> 
            <tr>
                <td>Gen:</td> 
                <td>{user.gen}</td>
            </tr> 
        
          </table>
        ))}
        </div>
    </div>
  );
}

export default Users;
