import React, { useState } from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';
import P from '../../general/components/P';

const StyledAppContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const StyledDistanceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledDistanceText = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  color: ${GeneralStyles.colors.white};
`;

const StyledAppButton = styled.button`
  color: ${GeneralStyles.colors.white};
  background-color: #8000ff;
  font-size: 0.6rem;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 0.4rem 1.4rem;
`;

const StyledNavButton = styled.button`
  border: none;
  color: ${GeneralStyles.colors.white};
  font-size: 1rem;
  background: transparent;
`;

export default function DistanceTrackerApp() {
  const [hole, sethole] = useState(2);

  const incrementHole = () => {
    if (hole === 9) {
      sethole(1);
    } else {
      sethole(hole + 1);
    }
  };

  const decrementHole = () => {
    if (hole === 1) {
      sethole(9);
    } else {
      sethole(hole - 1);
    }
  };

  return (
    <StyledAppContainer>
      <P darkBackground>{hole}</P>
      <StyledDistanceRow>
        <StyledNavButton onClick={decrementHole}>{'<'}</StyledNavButton>
        <StyledDistanceText>326</StyledDistanceText>
        <StyledNavButton onClick={incrementHole}>{'>'}</StyledNavButton>
      </StyledDistanceRow>
      <StyledAppButton>Calculate</StyledAppButton>
    </StyledAppContainer>
  );
}
