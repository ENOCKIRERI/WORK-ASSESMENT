import React from 'react';

const users = [
  { name: 'John Doe', id: 1, career: 'Software engineer' },
  { name: 'Jane Doe', id: 2, career: 'Data Scientist' },
  { name: 'Billy Doe', id: 3, career: 'Cyber security analyst' },
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>ID: {user.id}</p>
          <p>Career: {user.career}</p>
        </li>
      ))}
    </ul>
  );
}



export default UserList;
