import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  background: url('https://example.com/hero-image.jpg') no-repeat center center/cover;
  height: 400px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroText = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroText>
        Welcome to My Polytechnic
        <br />
        Empowering Future Generations
      </HeroText>
    </HeroWrapper>
  );
};

export default HeroSection;
