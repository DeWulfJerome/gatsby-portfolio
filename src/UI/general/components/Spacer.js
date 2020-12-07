import React from 'react';
import styled from 'styled-components';

export const SpacerSize = {
  small: 1,
  medium: 2,
  large: 3,
  huge: 4
};

const StyledSpacer = styled.div`
  height: ${(props) => {
    switch (props.size) {
      case SpacerSize.small:
        return '1rem';
      case SpacerSize.medium:
        return '2rem';
      case SpacerSize.large:
        return '3rem';
      case SpacerSize.huge:
        return '4rem';
      default:
        return props.size;
    }
  }};
`;

export default function Spacer({ size }) {
  return <StyledSpacer size={size}></StyledSpacer>;
}
