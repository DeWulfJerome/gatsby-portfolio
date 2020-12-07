import React from 'react';
import styled from 'styled-components';
import Button from '../../general/components/Button';
import Gridcontainer from '../../general/components/Gridcontainer';
import GridOverlay from '../../general/components/GridOverlay';
import H3 from '../../general/components/H3';
import P from '../../general/components/P';
import SectionHeader from '../../general/components/SectionHeader';
import Spacer, { SpacerSize } from '../../general/components/Spacer';
import Phone from '../../general/components/Phone';
import Browser from '../../general/components/Browser';
import pathfindingPhone from '../../../assets/media/pathfindingPhone.png';
import pathfindingBrowser from '../../../assets/media/pathfindingBrowser.png';
import GeneralStyles from '../../../assets/styles/general-styles';
import GithubLogo from '../../../svg/githubLogo.svg';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledTextContainer = styled.div`
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const StyledPhoneImage = styled.img`
  height: 100%;
  width: auto;
`;

const StyledBrowserImage = styled.img`
  height: 100%;
  width: auto;
`;

const StyledBrowserContainer = styled.div`
  position: absolute;
  top: 0;
  right: -450px;
  z-index: 9;

  @media (max-width: 1200px) {
    right: -650px;
  }

  @media (max-width: 1000px) {
    right: -850px;
  }

  @media (max-width: 768px) {
    right: auto;
    left: 42%;
    top: 230px;
  }
`;

const StyledPhoneContainer = styled.div`
  margin-top: 23rem;
  z-index: 10;
  position: relative;
  @media (max-width: 1200px) {
    margin-top: 20rem;
  }

  @media (max-width: 1000px) {
    margin-top: 15rem;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

const StyledAnchor = styled.a`
  color: ${GeneralStyles.colors.blue.dark};
  text-decoration: none;
  * {
    transition: color 0.3s ease;
  }
  &:hover * {
    cursor: pointer;
    color: ${GeneralStyles.colors.blue.medium};
  }
`;

export default function Pathfinding() {
  return (
    <section id="Portfolio">
      <Gridcontainer>
        <SectionHeader>Portfolio</SectionHeader>
        <StyledRow>
          <StyledTextContainer>
            <H3>Pathfinding visualizer</H3>
            <Spacer size={SpacerSize.small}></Spacer>
            <P>An application I built to better understand how</P>
            <P>the most common pathfinding algorithms work.</P>
            <Spacer size={SpacerSize.small}></Spacer>
            <P>#react#styled-components</P>
            <Spacer size={SpacerSize.small}></Spacer>
            <StyledAnchor
              href="https://github.com/DeWulfJerome/pathfinding"
              target="blank"
            >
              <GithubLogo className="social-icon"></GithubLogo>
            </StyledAnchor>
            <Spacer size={SpacerSize.small}></Spacer>
            <Button
              text="Check it out"
              onButtonClick={() => {
                window.open('https://pathfinding.jeromedewulf.be');
              }}
            ></Button>
          </StyledTextContainer>
          <div>
            <StyledBrowserContainer>
              <Browser>
                <StyledBrowserImage
                  src={pathfindingBrowser}
                ></StyledBrowserImage>
              </Browser>
            </StyledBrowserContainer>
            <StyledPhoneContainer>
              <Phone>
                <StyledPhoneImage src={pathfindingPhone}></StyledPhoneImage>
              </Phone>
            </StyledPhoneContainer>
          </div>
        </StyledRow>
        <Spacer size={GeneralStyles.padding.huge}></Spacer>
        <GridOverlay></GridOverlay>
      </Gridcontainer>
    </section>
  );
}
