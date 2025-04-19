import React, { useEffect, useState } from 'react';
import HoverImage from './HoverImage';
import ImageTransition from './ImageTransition';
import ClickTapAnimation from './ClickTapAnimation';
import { Container, Paper, Typography } from '@mui/material';
import './EffectsHomePage.css';

const EffectsHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      className={`effects-home-container ${isLoading ? 'blur' : ''}`}
      maxWidth="sm"
      disableGutters
    >
      {isLoading && <div className="loading-spinner"></div>}
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
          <HoverImage src="/images/photo-2.png" alt="Image 2" />
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
