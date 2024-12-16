import React from 'react';
import Rating from './Rating';
import AddToCartButton from './AddToCartButton';
import DiscountPrice from './DiscountPrice';
import '../css/ProductCard.css';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <h2>{product.name}</h2>
      <DiscountPrice price={product.price} discountedPrice={product.discountedPrice} />
      <Rating rating={product.rating} />
      <AddToCartButton productId={product.id} onAdd={onAdd} />
    </div>
  );
};

export default ProductCard;
