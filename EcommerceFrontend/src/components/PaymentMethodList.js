import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentMethodList = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPaymentMethod, setNewPaymentMethod] = useState({ name: '', details: '' });

  useEffect(() => {
    axios.get('https://localhost:7103/api/paymentmethod')
      .then(response => {
        setPaymentMethods(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching payment methods');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPaymentMethod(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addPaymentMethod = (newPaymentMethod) => {
    axios.post('https://localhost:7103/api/paymentmethod', newPaymentMethod)
      .then(response => {
        console.log('Payment method added:', response.data);
        setPaymentMethods([...paymentMethods, response.data]);
      })
      .catch(err => {
        console.error('Error adding payment method:', err);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPaymentMethod(newPaymentMethod);
    setNewPaymentMethod({ name: '', details: '' });
  };

  if (loading) {
    return <p>Loading payment methods...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Payment Methods</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Payment Method Name</label>
          <input 
            type="text" 
            name="name" 
            value={newPaymentMethod.name} 
            onChange={handleInputChange} 
            placeholder="Enter payment method name" 
            required 
          />
        </div>
        <div>
          <label>Details</label>
          <input 
            type="text" 
            name="details" 
            value={newPaymentMethod.details} 
            onChange={handleInputChange} 
            placeholder="Enter details" 
            required 
          />
        </div>
        <button type="submit">Add Payment Method</button>
      </form>

      {paymentMethods.length > 0 ? (
        <ul>
          {paymentMethods.map(method => (
            <li key={method.id}>{method.name} - {method.details}</li>
          ))}
        </ul>
      ) : (
        <p>No payment methods available</p>
      )}
    </div>
  );
};

export default PaymentMethodList;
