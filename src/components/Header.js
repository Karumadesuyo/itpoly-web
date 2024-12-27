import React, { useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #0044cc;
  color: white;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Logo>My Polytechnic</Logo>
      <Nav style={{ display: isMobileMenuOpen ? "flex" : "none" }}>
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </Nav>
      <HamburgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </HamburgerMenu>
    </HeaderWrapper>
  );
};

export default Header;
