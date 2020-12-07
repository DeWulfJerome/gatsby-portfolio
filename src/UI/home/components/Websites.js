import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';
import Gridcontainer from '../../general/components/Gridcontainer';
import GridOverlay from '../../general/components/GridOverlay';
import SectionHeader from '../../general/components/SectionHeader';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import WebsiteSlider from '../../general/components/WebsiteSlider';

const StyledSection = styled.section`
  background-color: ${GeneralStyles.colors.blue.dark};
  position: relative;
  z-index: 0;
`;
export default function Websites() {
  return (
    <StyledSection>
      <Gridcontainer>
        <SectionHeader darkBackground>Websites</SectionHeader>
        <WebsiteSlider></WebsiteSlider>
        <Spacer size={SpacerSize.large}></Spacer>
        <GridOverlay darkBackground></GridOverlay>
      </Gridcontainer>
    </StyledSection>
  );
}
