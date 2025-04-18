import React from 'react';
import './HoverImage.css';

const HoverImage = ({ src, alt }) => {
  return (
    <div className="hover-container">
      <img src={src} alt={alt} className="hover-image" />
    </div>
  );
};

export default HoverImage;