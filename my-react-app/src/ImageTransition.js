import React, { useState, useEffect } from 'react';
import './ImageTransition.css';

const ImageTransition = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // Change image every 'interval' milliseconds

    return () => clearInterval(timer); // Cleanup the interval
  }, [images, interval]);

  return (
    <div className="image-transition-container">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="transition-image"
      />
    </div>
  );
};

export default ImageTransition;