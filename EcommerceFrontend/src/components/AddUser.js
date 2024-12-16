import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddUser.css';

const AddUser = ({ setUsers }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [merchantId, setMerchantId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { 
      username, 
      email, 
      passwordHash: password, 
      role, 
      merchantId: parseInt(merchantId) 
    };

    axios.post('https://localhost:7103/api/user', newUser)
      .then(response => {
        console.log('User added:', response.data);
        setUsername('');
        setEmail('');
        setPassword('');
        setRole('');
        setMerchantId('');

        setUsers(prevUsers => [...prevUsers, response.data]);
      })
      .catch(err => {
        console.error('Error adding user:', err);
      });
  };

  return (
    <div className="user-add-user-container">
      <h2 className="user-h2">Add User</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="user-div">
          <label className="user-label">User Username:</label>
          <input 
            className="user-input"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        <div className="user-div">
          <label className="user-label">User Email:</label>
          <input 
            className="user-input"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="user-div">
          <label className="user-label">User Password:</label>
          <input 
            className="user-input"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className="user-div">
          <label className="user-label">User Role:</label>
          <input 
            className="user-input"
            type="text" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          />
        </div>
        <div className="user-div">
          <label className="user-label">User Merchant ID:</label>
          <input 
            className="user-input"
            type="number" 
            value={merchantId} 
            onChange={(e) => setMerchantId(e.target.value)} 
            required
          />
        </div>
        <button className="user-button" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
