import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShippingMethodList = () => {
  const [shippingMethods, setShippingMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7103/api/shippingmethod')
      .then(response => {
        setShippingMethods(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching shipping methods');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading shipping methods...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Shipping Methods</h2>
      {shippingMethods.length > 0 ? (
        <ul>
          {shippingMethods.map(method => (
            <li key={method.id}>{method.name}</li>
          ))}
        </ul>
      ) : (
        <p>No shipping methods available</p>
      )}
    </div>
  );
};

export default ShippingMethodList;
