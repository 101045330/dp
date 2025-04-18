import React from 'react';
import HoverImage from './HoverImage';
import ImageTransition from './ImageTransition';
import './EffectsHomePage.css'; // Create this file

const EffectsHomePage = () => {
  const transitionImages = [
    '/images/photo-1.png', // Replace with your image paths
    '/images/photo-2.png',
    '/images/photo-3.png',
  ];

  return (
    <div className="effects-home-container">
      <div className="hover-images-section">
        <h2>Hover Image Gallery</h2>
        <div className="hover-images-grid">

          <HoverImage src="/images/photo-3.png" alt="Image 3" />

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