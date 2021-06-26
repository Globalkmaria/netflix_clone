// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

export const BannerContainer = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
  background-size: cover;
  background-position: center center;
  background-image: ${({ backUrl }) => `${backUrl}`};
`;
export const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;
export const BannerTitle = styled.h1`
  font-size: 50px;
  display: block;

  font-weight: 800;
  padding-bottom: 0.3rem;
`;
export const BannerDescription = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;
export const BannerButtons = styled.div`
  display: flex;
`;
export const BannerButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: ${({ info }) => (info ? '#fff' : '#505050')};
  background: ${({ info }) => (info ? '#505050' : '#fff')};
  &:hover {
    background: ${({ info }) =>
      info ? `${darken(0.2, '#505050')}` : `${darken(0.2, '#fff')}`};
  }
`;

export const BannerButtonIcon = styled.i`
  font-size: ${({ info }) => (info ? '19px' : 'inherit')};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BannerButtonSpan = styled.span`
  margin: auto 0;
`;
export const BannerFadeBottom = styled.div`
  height: 118px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
