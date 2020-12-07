import React from 'react';
import styled from 'styled-components';

const StyledPhone = styled.figure`
  width: 264px;
  height: 533px;
  padding: 8px;
  border-radius: 36px;
  background: #f6f9fc;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3),
    inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 200px;
    height: 400px;
    border-radius: 26px;
  }
`;

const StylePhoneContent = styled.div`
  position: relative;
  height: 100%;
  border-radius: 34px;
  -webkit-mask-image: -webkit-radial-gradient(#fff, #000);
  background: #fff;

  @media (max-width: 768px) {
    border-radius: 26px;
  }
`;

export default function Phone({ children }) {
  return (
    <StyledPhone>
      <StylePhoneContent>{children}</StylePhoneContent>
    </StyledPhone>
  );
}
