import React, { useState } from 'react';
import '../css/AddToCartButton.css';

const AddToCartButton = ({ productId, onAdd }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    onAdd(productId);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1300);
  };

  return (
    <button
      className={`add-to-cart-button ${addedToCart ? 'added' : ''}`}
      onClick={handleAddToCart}
    >
      {addedToCart ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
