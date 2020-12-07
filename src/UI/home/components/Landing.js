import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../general/components/Button';
import Gridcontainer from '../../general/components/Gridcontainer';
import H1 from '../../general/components/H1';
import P from '../../general/components/P';
import H3 from '../../general/components/H3';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import PointCloud from './PointCloud';
import GridOverlay from '../../general/components/GridOverlay';

const StyledLandingContainer = styled.div`
  min-height: ${(props) => props.windowHeight - 120 + 'px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export default function Landing() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
    });

    return window.removeEventListener('resize', window);
  }, [windowHeight]);
  return (
    <section>
      <Gridcontainer>
        <StyledLandingContainer windowHeight={windowHeight}>
          <div>
            <H3>Hi I'm</H3>
            <H1>Jerome De Wulf</H1>
            <P>I build digital solutions.</P>
            <P>#codedogsandguitar</P>
            <Spacer size={SpacerSize.medium}></Spacer>
            <Button
              text="Get in touch"
              onButtonClick={() => {
                console.log('clicked');
              }}
            ></Button>
          </div>
          <PointCloud></PointCloud>
        </StyledLandingContainer>
        <GridOverlay></GridOverlay>
      </Gridcontainer>
    </section>
  );
}
