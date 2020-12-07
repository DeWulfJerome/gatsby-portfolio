import React from 'react';
import styled from 'styled-components';
import Button from '../../general/components/Button';
import Gridcontainer from '../../general/components/Gridcontainer';
import GridOverlay from '../../general/components/GridOverlay';
import H3 from '../../general/components/H3';
import P from '../../general/components/P';
import SectionHeader from '../../general/components/SectionHeader';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import me from '../../../assets/media/me.jpeg';
import { useMediaQuery } from '@react-hook/media-query';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledColumn = styled.div`
  width: 50%;
  box-sizing: border-box;

  &:nth-child(3) {
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: ${(props) => (props.center ? 'center' : 'left')};
  }
`;

const StyledImage = styled.img`
  height: 300px;
  width: auto;
  border-radius: 20px;
  box-shadow: 10px 10px 52px rgba(0, 0, 0, 0.16);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export default function About() {
  const phoneQueryMatches = useMediaQuery('only screen and (max-width: 768px)');
  return (
    <section id="About">
      <Gridcontainer>
        <Spacer size={'5rem'}></Spacer>
        <StyledRow>
          <Spacer size={phoneQueryMatches ? '5rem' : '35rem'}></Spacer>
          <SectionHeader>About</SectionHeader>
          <StyledColumn>
            <H3>About me</H3>
            <P>
              I'm a no nonsense problem solver from Antwerp currently working as
              a frontend developer at Freebility. I have professional experience
              with React, React-native, Angular and Wordpress.
            </P>
            <P>Sometimes I dabble with Python or PHP</P>
            <Spacer size={SpacerSize.small}></Spacer>
            <P>
              Occasionally I'm open to freelance work. Need help with a project?
              Be sure to get in touch!
            </P>
            <Spacer size={SpacerSize.small}></Spacer>
            <Button
              text="Get in touch"
              onButtonClick={() => {
                console.log('get in toch');
              }}
            ></Button>
            <Spacer size={phoneQueryMatches ? SpacerSize.large : '0'}></Spacer>
          </StyledColumn>
          <StyledColumn center>
            <StyledImage src={me}></StyledImage>
            <Spacer size={phoneQueryMatches ? SpacerSize.huge : '0'}></Spacer>
          </StyledColumn>
        </StyledRow>
        <GridOverlay></GridOverlay>
      </Gridcontainer>
    </section>
  );
}
