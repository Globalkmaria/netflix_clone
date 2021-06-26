import React from 'react';
import styled from 'styled-components';

export const NavConatiner = styled.nav`
  background: ${({ show }) => (show ? '#111' : 'transparent')};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  z-index: 1;
  height: 30px;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in;
`;
export const NavImgLogo = styled.img`
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;
export const NavImgAvatar = styled.img`
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;
