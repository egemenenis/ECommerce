import React from 'react';
import '../css/Rating.css';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
        >
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;
