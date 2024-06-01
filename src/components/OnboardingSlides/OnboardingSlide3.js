import React from 'react';
import { SlideContainer, Title, Description, NextButton, StyledImage } from './OnboardingSlide1.styles';
import { useNavigate } from 'react-router-dom';
import world from '../../assets/images/world.png'


const OnboardingSlide3 = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/register'); 
  };

  return (
    <SlideContainer>
      <StyledImage src={world} alt="world" />

      <Title>Paying for Everything is Easy and Convenient</Title>
      <Description>Built-in Fingerprint, face recognition and more, keeping you completely safe</Description>
      <NextButton onClick={handleStart}>Start</NextButton>
    </SlideContainer>
  );
};

export default OnboardingSlide3;
