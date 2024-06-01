import React from 'react';
import { SlideContainer, Title, Description, NextButton, StyledImage } from './OnboardingSlide1.styles';
import Secoure from '../../assets/images/Secoure.png'


const OnboardingSlide2 = ({ nextSlide }) => {
  return (
    <SlideContainer>
      <StyledImage src={Secoure} alt="secoure" />
      <Title>The most Secoure <br /> Platfrom for Customer</Title>
      <Description>Built-in Fingerprint, face <br /> 
      recognition and more, keeping you <br /> 
      completely safe</Description>
      <NextButton onClick={nextSlide}>Next</NextButton>
    </SlideContainer>
  );
};

export default OnboardingSlide2;
