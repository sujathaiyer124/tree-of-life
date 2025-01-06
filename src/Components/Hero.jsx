import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundImage from "../img4.jpg"; // Replace with your background image path

// Styled Components
const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center center/cover;
  z-index: 0;
  @media (max-width: 1024px) {
    background-size: 120%;
  }

  @media (max-width: 768px) {
    background-size: 130%; /* More zoomed-in effect on mobile */
  }

  @media (max-width: 600px) {
    background-size: 150%; /* Even more zoomed-in effect on smaller screens */
  }

  @media (max-width: 300px) {
    background-size: 180%; /* Maximum zoom for very small devices */
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for text contrast */
  z-index: 1;
`;

const Quote = styled(motion.h1)`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin: 0 20px;
  z-index: 2;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  max-width: 800px;
  line-height: 1.5;
    @media (max-width: 1024px) {
    font-size: 2rem; 
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    margin: 0 10px; 
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; 
  }
   @media (max-width: 300px) {
    font-size: 1rem; 
    margin: 0 5px; 
  }
`;

// Hero Section Component
const HeroSection = () => {
  return (
    <HeroContainer>
      {/* Animated Background Image */}
      <BackgroundImage
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      />
      <Overlay />
      {/* Quote with Fade-in Effect */}
      <Quote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        "A society grows great when old people plant trees whose shade they know
        they shall never sit in."
      </Quote>
    </HeroContainer>
  );
};

export default HeroSection;
