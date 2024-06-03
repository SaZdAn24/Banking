import React from 'react';
import { SlideContainer, Title, Description, NextButton, StyledImage, } from './OnboardingSlide1.styles';
import Logo from '../../assets/images/home.png'



const OnboardingSlide1 = ({ nextSlide }) => {
  return (
    <SlideContainer>
      <StyledImage src={Logo} alt="logo" />
      <Title>Fastest Payment in <br /> the world</Title>
      <Description>Integrate multiple payment methods <br />
       to help you up the process quickly</Description>
      <NextButton onClick={nextSlide}>Next</NextButton>
    </SlideContainer>
  );
};



export default OnboardingSlide1;
