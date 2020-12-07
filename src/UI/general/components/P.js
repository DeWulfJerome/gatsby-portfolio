import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledP = styled.p`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
  color: ${(props) =>
    props.darkBackground
      ? GeneralStyles.colors.white
      : GeneralStyles.colors.blue.dark};
`;

export default function P({ children, darkBackground = false }) {
  return <StyledP darkBackground={darkBackground}>{children}</StyledP>;
}
