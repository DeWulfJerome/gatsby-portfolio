import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledButton = styled.button`
  background: linear-gradient(
    to right,
    ${GeneralStyles.colors.blue.dark},
    ${GeneralStyles.colors.blue.medium}
  );
  border: none;
  color: ${GeneralStyles.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 2rem;
  box-shadow: 3px 3px 20px rgba(3, 17, 143, 0.18);
  transition: all 0.3s ease;
  transform: translateY(0);

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

export default function Button({ onButtonClick, text }) {
  return <StyledButton onClick={onButtonClick}>{text}</StyledButton>;
}
