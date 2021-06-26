import React from 'react';
import styled from 'styled-components';

export const RowContainer = styled.div`
  margin-left: 20px;
  color: #fff;
`;
export const Title = styled.h2`
  margin-left: 20px;
  font-size: 1.1rem;
  font-weight: 500;
`;
export const RowPosters = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px 20px 35px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const RowPoster = styled.li`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  position: relative;

  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
`;
export const RowPosterImg = styled.img`
  object-fit: contain;
  /* width: 100%; */
  max-height: ${({ isLargeRow }) => (isLargeRow ? '250px' : '130px')};
  margin-right: 10px;
`;
export const RowPosterH3 = styled.h3`
  box-sizing: border-box;
  padding: 0 30px 0 20px;
  opacity: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    opacity: 100%;
  }
`;
