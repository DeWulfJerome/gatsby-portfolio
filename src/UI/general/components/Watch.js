import React from 'react';
import styled from 'styled-components';

const StyledWatch = styled.figure`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  border: 16px solid rgb(209, 219, 228);
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  box-shadow: 10px 10px 52px rgba(162, 156, 156, 0.42);

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export default function Watch({ children }) {
  return <StyledWatch>{children}</StyledWatch>;
}
