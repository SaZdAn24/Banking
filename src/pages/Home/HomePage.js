import React, { useState } from 'react';
import OnboardingSlide1 from '../../components/OnboardingSlides/OnboardingSlide1';
import OnboardingSlide2 from '../../components/OnboardingSlides/OnboardingSlide2';
import OnboardingSlide3 from '../../components/OnboardingSlides/OnboardingSlide3';
import { Container, SlideWrapper } from './HomePage.styles';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide < 3 ? prevSlide + 1 : prevSlide));
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <OnboardingSlide1 nextSlide={nextSlide} />;
      case 2:
        return <OnboardingSlide2 nextSlide={nextSlide} />;
      case 3:
        return <OnboardingSlide3 />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <SlideWrapper>
        {renderSlide()}
      </SlideWrapper>
    </Container>
  );
};

export default HomePage;
