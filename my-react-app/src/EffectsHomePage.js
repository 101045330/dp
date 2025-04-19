//EffectsHomePage.js
import React, { useEffect, useState } from 'react';
import HoverImage from './HoverImage';
import ImageTransition from './ImageTransition';
import ClickTapAnimation from './ClickTapAnimation';
import PaperConfetti from './PaperConfetti'; // Import the 3D effect component
import { Container, Paper, Typography } from '@mui/material'; // Correct import for Material-UI components
import './EffectsHomePage.css';

const EffectsHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [renderHoverImage, setRenderHoverImage] = useState(false); // New state

  const transitionImages = [
    '/images/photo-1.png', // Replace with your image paths
    '/images/photo-2.png',
    '/images/photo-3.png',
  ];

  const profileData = {
    imageSrc: '/images/photo-2.png', // Replace with your image path
    name: 'MIn G.',
    title: 'Modern UI Developer',
    bio: 'Hello, I’m Min, a web designer and developer with a strong foundation in both creative design and technical development. I recently completed a Diploma in front-end design, where I focused on building accessible, responsive, and custom user interfaces. Before that, I completed an undergraduate degree in game design and development, which gave me a solid grasp of 3D prototyping and animation..',
    portfolioLink: 'https://101045330.github.io/web/',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://linkedin.com/in/mineshonline/' },
      { name: 'GitHub', url: 'https://github.com/101045330' },
    ],
    contactInfo: { email: '101045330@georgebrown.ca' },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false); // Confetti disappears
        setRenderHoverImage(true); // Allow rendering of HoverImage
      }, 2000); // Duration of confetti
    }, 2000); // Delay before loading ends

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      className={`effects-home-container ${isLoading ? 'blur' : ''}`}
      maxWidth="sm"
      disableGutters
    >
      {isLoading && <div className="loading-spinner"></div>}
      {showConfetti && <PaperConfetti />}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <Paper className="section hover-images-section" elevation={3}>
        <Typography variant="h4" component="h2">
          Hover Image Gallery
        </Typography>
        <div className="hover-images-grid">
          {renderHoverImage && <HoverImage src="/images/photo-2.png" alt="Image 2" />}
        </div>
      </Paper>

      <Paper className="section transition-image-section" elevation={3}>
        <Typography variant="h4" component="h2">
          Image Transition
        </Typography>
        <ImageTransition images={transitionImages} interval={2500} />
      </Paper>

      <Paper className="section click-tap-section" elevation={3}>
        <Typography variant="h4" component="h2">
          Click/Tap Animation
        </Typography>
        <ClickTapAnimation {...profileData} />
      </Paper>
    </Container>
  );
};

export default EffectsHomePage;