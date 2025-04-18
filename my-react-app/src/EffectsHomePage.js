import React from 'react';
import HoverImage from './HoverImage';
import ImageTransition from './ImageTransition';
import './EffectsHomePage.css'; // Create this file

const EffectsHomePage = () => {
  const transitionImages = [
    '/images/image1.jpg', // Replace with your image paths
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div className="effects-home-container">
      <div className="hover-images-section">
        <h2>Hover Image Gallery</h2>
        <div className="hover-images-grid">
          <HoverImage src="/images/image1.jpg" alt="Image 1" />
          <HoverImage src="/images/image2.jpg" alt="Image 2" />
          <HoverImage src="/images/image3.jpg" alt="Image 3" />
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