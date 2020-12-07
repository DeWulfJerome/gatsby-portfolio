import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledH3 = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  color: ${(props) =>
    props.darkBackground
      ? GeneralStyles.colors.white
      : GeneralStyles.colors.blue.dark};
`;

export default function H3({ children, darkBackground = false }) {
  return <StyledH3 darkBackground={darkBackground}>{children}</StyledH3>;
}
