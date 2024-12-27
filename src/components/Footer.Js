import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #0044cc;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Polytechnic Institute | All Rights Reserved</p>
      <p>
        <a href="#facebook" style={{ color: 'white', marginRight: '10px' }}>
          Facebook
        </a>
        <a href="#twitter" style={{ color: 'white' }}>
          Twitter
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
