import React from 'react';
import { motion } from 'framer-motion';
import './HoverImage.css';

const HoverImage = ({ src, alt }) => {
  const variants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      filter: 'grayscale(0%)', // Initial grayscale value
    },
    hover: {
      scale: 1.05,
      rotateX: -10,
      rotateY: 10,
      boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
      filter: 'grayscale(100%)', // Grayscale on hover
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="hover-container"
      variants={variants}
      initial="initial"
      whileHover="hover"
    >
      <motion.img
        src={src}
        alt={alt}
        className="hover-image"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
    </motion.div>
  );
};

export default HoverImage;
