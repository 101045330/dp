// EffectsHomePage.js
import React, { useEffect, useState } from 'react';
import HoverImage from './HoverImage';
import ImageTransition from './ImageTransition';
import './EffectsHomePage.css'; // Create this file

const EffectsHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const transitionImages = [
    '/images/photo-1.png', // Replace with your image paths
    '/images/photo-2.png',
    '/images/photo-3.png',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`effects-home-container ${isLoading ? 'blur' : ''}`}>
      <div className="hover-images-section">
        <h2>Hover Image Gallery</h2>
        <div className="hover-images-grid">
          <HoverImage src="/images/photo-2.png" alt="Image 2" />
        </div>
      </div>

      <div className="transition-image-section">
        <h2>Image Transition</h2>
        <ImageTransition images={transitionImages} interval={2500} />
      </div>
    </div>
  );
};

export default EffectsHomePage;
