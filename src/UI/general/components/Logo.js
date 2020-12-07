import React from 'react';
import logo from '../../../assets/media/Logo.png';
import styled from 'styled-components';

export const LogoSizes = {
  small: 0,
  medium: 1,
  large: 2,
  huge: 3
};

const StyledLogo = styled.img`
  width: auto;
  height: ${(props) => {
    switch (props.size) {
      case LogoSizes.small:
        return '40px';
      case LogoSizes.medium:
        return '70px';
      case LogoSizes.large:
        return '160px';
      case LogoSizes.huge:
        return '320px';
      default:
        return '40px';
    }
  }};
`;

export default function Logo({ size }) {
  return <StyledLogo src={logo} alt="Logo" size={size}></StyledLogo>;
}
