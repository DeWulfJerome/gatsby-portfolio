import React from 'react';
import styled from 'styled-components';

const StyleSectionheader = styled.h2`
  font-size: 100px;
  top: 0;
  left: -100px;
  right: 0;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  color: ${(props) =>
    props.darkBackground ? 'rgba(255,255,255,0.06)' : 'rgba(6,20,68, .02)'};

  @media (max-width: 768px) {
    left: -60px;
  }
`;

export default function SectionHeader({ children, darkBackground }) {
  return (
    <StyleSectionheader darkBackground={darkBackground}>
      {children}
    </StyleSectionheader>
  );
}
