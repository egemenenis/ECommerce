import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7103/api/user')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('An error occurred while importing users.');
        setLoading(false);
      });
  }, []);

  const handleDeleteUser = (id) => {
    axios.delete(`https://localhost:7103/api/user/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.userId !== id));
      })
      .catch(err => {
        console.error('Error while deleting user:', err);
      });
  };

  if (loading) {
    return <div className="loading">Users are loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-list-container">
      <h2 className="title">User List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.userId} className="user-item">
            <div className="user-info">
              <div className="info-item">
                <strong>Username:</strong>
                <span>{user.username}</span>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <span>{user.email}</span>
              </div>
              <div className="info-item">
                <strong>Role:</strong>
                <span>{user.role}</span>
              </div>
              <div className="info-item">
                <strong>User ID:</strong>
                <span>{user.userId}</span>
              </div>
              <div className="info-item">
                <strong>Merchant ID:</strong>
                <span>{user.merchantId}</span>
              </div>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => handleDeleteUser(user.userId)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
