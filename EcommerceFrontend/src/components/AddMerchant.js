import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddMerchant.css';

const AddMerchant = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMerchant = {
      name,
      description,
      email,
      phone,
      address,
      city,
      isVerified,
      profileImageUrl,
      openingHours,
    };

    setLoading(true);

    try {
      const response = await axios.post('https://localhost:7103/api/merchant', newMerchant);
      console.log('Merchant added:', response.data);
      setName('');
      setEmail('');
      setDescription('');
      setPhone('');
      setAddress('');
      setCity('');
      setIsVerified(false);
      setProfileImageUrl('');
      setOpeningHours('');
      setError(null);
    } catch (err) {
      console.error('Error adding merchant:', err);
      setError('An error occurred while adding merchant!!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-merchant-container">
      <div className="form-wrapper">
        <h2>Add Merchant</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength="500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="isVerified">Is Verified:</label>
            <input
              id="isVerified"
              type="checkbox"
              checked={isVerified}
              onChange={(e) => setIsVerified(e.target.checked)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="profileImageUrl">Profile Image URL:</label>
            <input
              id="profileImageUrl"
              type="text"
              value={profileImageUrl}
              onChange={(e) => setProfileImageUrl(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="openingHours">Opening Hours:</label>
            <input
              id="openingHours"
              type="text"
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Merchant'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {loading && <div className="loading-indicator">Adding Merchant</div>}
      </div>
    </div>
  );
};

export default AddMerchant;
