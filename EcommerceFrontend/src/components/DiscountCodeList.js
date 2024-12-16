import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiscountCodeList = () => {
  const [discountCodes, setDiscountCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7103/api/discountcode')
      .then(response => {
        setDiscountCodes(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching discount codes');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading discount codes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Discount Codes</h2>
      {discountCodes.length > 0 ? (
        <ul>
          {discountCodes.map(code => (
            <li key={code.id}>{code.code} - {code.discountPercentage}%</li>
          ))}
        </ul>
      ) : (
        <p>No discount codes available</p>
      )}
    </div>
  );
};

export default DiscountCodeList;
