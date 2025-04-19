// ImageTransition.js
import React, { useState, useEffect } from 'react';
import './ImageTransition.css';

const ImageTransition = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="image-transition-container">
      <img
        src={images[currentIndex]}
        alt={`${currentIndex + 1}`}
        className="transition-image"
      />
    </div>
  );
};

export default ImageTransition;