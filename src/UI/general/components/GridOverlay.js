import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledGridOverlayContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -2;
`;

const StyledGridOverlay = styled.div`
  display: grid;
  grid: 1fr / repeat(6, 1fr);
  position: relative;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: -2;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 1000px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    grid: 1fr / repeat(4, 1fr);
  }
`;

const StyledGridLine = styled.div`
  width: 1px;
  z-index: -2;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(
      ${(props) =>
        props.darkBackground
          ? GeneralStyles.colors.grey.gridLinesDarkBackground
          : GeneralStyles.colors.grey.gridLines}
    ),
    color-stop(
      50%,
      ${(props) =>
        props.darkBackground
          ? GeneralStyles.colors.grey.gridLinesDarkBackground
          : GeneralStyles.colors.grey.gridLines}
    ),
    color-stop(50%, transparent),
    to(transparent)
  );
  background: linear-gradient(
    180deg,
    ${(props) =>
      props.darkBackground
        ? GeneralStyles.colors.grey.gridLinesDarkBackground
        : GeneralStyles.colors.grey.gridLines},
    ${(props) =>
        props.darkBackground
          ? GeneralStyles.colors.grey.gridLinesDarkBackground
          : GeneralStyles.colors.grey.gridLines}
      50%,
    transparent 0,
    transparent
  );
  background-size: 1px 8px;

  &:last-of-type {
    top: 0;
    right: 0;
    height: 100%;
    position: absolute;
  }
  @media (max-width: 768px) {
    &:first-child {
      opacity: 0;
    }
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }
`;

export default function GridOverlay({ darkBackground }) {
  return (
    <StyledGridOverlayContainer>
      <StyledGridOverlay>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
        <StyledGridLine darkBackground={darkBackground}></StyledGridLine>
      </StyledGridOverlay>
    </StyledGridOverlayContainer>
  );
}
