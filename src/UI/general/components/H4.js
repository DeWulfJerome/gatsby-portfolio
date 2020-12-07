import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledH4 = styled.h4`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: ${(props) =>
    props.darkBackground
      ? GeneralStyles.colors.white
      : GeneralStyles.colors.blue.dark};
`;
export default function H4({ children }) {
  return <StyledH4>{children}</StyledH4>;
}
