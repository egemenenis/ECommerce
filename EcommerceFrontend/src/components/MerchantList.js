import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MerchantList.css';

const MerchantList = () => {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7103/api/merchant')
      .then(response => {
        setMerchants(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('An error occurred while retrieving seller information');
        setLoading(false);
      });
  }, []);

  const handleDeleteMerchant = (id) => {
    axios.delete(`https://localhost:7103/api/merchant/${id}`)
      .then(response => {
        setMerchants(merchants.filter(merchant => merchant.merchantId !== id)); 
      })
      .catch(err => {
        console.error('Error deleting merchant:', err);
      });
  };

  if (loading) {
    return <div className="loading">Merchants are loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="merchant-list-container">
      <h2 className="title">Merchants List</h2>
      <ul className="merchant-list">
        {merchants.map(merchant => (
          <li key={merchant.merchantId} className="merchant-item">
            <div className="merchant-info">
              {merchant.profileImageUrl && (
                <img 
                  src={merchant.profileImageUrl} 
                  alt={`${merchant.name}'s profile`} 
                  className="merchant-profile-image"
                />
              )}
              <h3>{merchant.name}</h3>
              <p><strong>Email:</strong> {merchant.email}</p>
              {merchant.description && <p><strong>Description:</strong> {merchant.description}</p>}
              {merchant.phone && <p><strong>Phone:</strong> {merchant.phone}</p>}
              {merchant.address && <p><strong>Address:</strong> {merchant.address}</p>}
              {merchant.city && <p><strong>City:</strong> {merchant.city}</p>}
              <p><strong>Verified:</strong> {merchant.isVerified ? 'Yes' : 'No'}</p>
              {merchant.openingHours && <p><strong>Opening Hours:</strong> {merchant.openingHours}</p>}
            </div>
            <button 
              className="delete-btn" 
              onClick={() => handleDeleteMerchant(merchant.merchantId)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MerchantList;
