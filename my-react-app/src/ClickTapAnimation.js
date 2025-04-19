import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ClickTapAnimation.css';

const ClickTapAnimation = ({ imageSrc, name, title, bio, portfolioLink, socialLinks, contactInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <div className="click-tap-container">
      <motion.div
        className="image-container"
        onClick={handleClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={imageSrc} alt="Profile" className="profile-image" />
      </motion.div>

      {isExpanded && (
        <motion.div
          className="expanded-view"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-content" variants={textVariants}>
            <motion.h1>{name}</motion.h1>
            <motion.h2>{title}</motion.h2>
            <motion.p>{bio}</motion.p>
            <motion.div className="links">
              <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ))}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </motion.div>
          </motion.div>
          <button className="close-button" onClick={handleClick}>
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ClickTapAnimation;
