import React from 'react';
import '../css/DiscountPrice.css';

const DiscountPrice = ({ price, discountedPrice }) => {
  return (
    <div className="price">
      {discountedPrice ? (
        <>
          <span className="discount">${price}</span>
          <span className="special-price">${discountedPrice}</span>
        </>
      ) : (
        <span>${price}</span>
      )}
    </div>
  );
};

export default DiscountPrice;
