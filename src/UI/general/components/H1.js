import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin: 0.5rem 0;
  line-height: 1;
  margin-bottom: 1rem;
  color: ${(props) =>
    props.darkBackground
      ? GeneralStyles.colors.white
      : GeneralStyles.colors.blue.dark};
`;

export default function H1({ children, darkBackground = false }) {
  return <StyledH1 darkBackground={darkBackground}>{children}</StyledH1>;
}
