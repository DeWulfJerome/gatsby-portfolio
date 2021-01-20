import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Browser from './Browser';
import H3 from './H3';
import P from './P';
import Button from './Button';
import Spacer, { SpacerSize } from './Spacer';
import { useMediaQuery } from '@react-hook/media-query';
import { graphql, useStaticQuery } from 'gatsby';

export default function WebsiteSlider() {
  const smallLaptopQueryMatches = useMediaQuery(
    'only screen and (max-width: 1200px)'
  );
  const tabletQueryMatches = useMediaQuery(
    'only screen and (max-width: 1000px)'
  );

  const phoneQueryMatches = useMediaQuery('only screen and (max-width: 768px)');
  const [sliderWidth, setsliderWidth] = useState(800);
  const [sliderHeight, setsliderHeight] = useState(450);

  const websiteData = useStaticQuery(graphql`
    {
      allSanityWebsites {
        edges {
          node {
            name
            websiteUrl
            body {
              children {
                text
              }
            }
            mainImage {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    let widthToSet = 800;
    let heightToSet = 450;
    if (smallLaptopQueryMatches) {
      widthToSet = 800;
      heightToSet = 550;
    }
    if (tabletQueryMatches) {
      widthToSet = 800;
      heightToSet = 700;
    }
    if (phoneQueryMatches) {
      widthToSet = 360;
      heightToSet = 420;
    }
    setsliderWidth(widthToSet);
    setsliderHeight(heightToSet);
  }, [smallLaptopQueryMatches, tabletQueryMatches, phoneQueryMatches]);

  return (
    <div>
      <CarouselProvider
        className="carouselProvider"
        naturalSlideWidth={sliderWidth}
        naturalSlideHeight={sliderHeight}
        totalSlides={websiteData.allSanityWebsites.edges.length}
      >
        <Slider className="carouselSlider">
          {websiteData.allSanityWebsites.edges.map(({ node }, index) => {
            return (
              <Slide key={index} index={index}>
                <WebsiteSlide
                  name={node.name}
                  websiteUrl={node.websiteUrl}
                  body={node.body}
                  mainImageUrl={node.mainImage.asset.url}
                ></WebsiteSlide>
              </Slide>
            );
          })}
        </Slider>
        <DotGroup className="dotGroup"></DotGroup>
      </CarouselProvider>
    </div>
  );
}

const StyledCard = styled.div`
  background: radial-gradient(
    farthest-corner at 100px 200px,
    rgba(202, 198, 233, 0.81) 22%,
    rgba(255, 255, 255, 0.96)
  );
  border-radius: 40px;
  box-sizing: border-box;
  padding: 3rem;
  min-width: 350px;

  @media (max-width: 768px) {
    display: none;
    padding: 2rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledWebsiteSlide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledBrowserContainer = styled.div`
  position: absolute;
  left: 350px;
  top: 70px;
  z-index: -1;

  @media (max-width: 1000px) {
    left: 250px;
  }

  @media (max-width: 768px) {
    left: 0;
    right: 0;
    top: 100px;
  }
`;

const StyledBrowserImage = styled.img`
  height: 100%;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const WebsiteSlide = ({ name, websiteUrl, body, mainImageUrl }) => {
  const phoneQueryMatches = useMediaQuery('only screen and (max-width: 768px)');
  return (
    <StyledWebsiteSlide>
      <div>
        <Spacer size={'22rem'}></Spacer>
        <StyledCard>
          <H3>{name}</H3>
          <Spacer size={SpacerSize.small}></Spacer>
          {body.map(({ children }, index) => {
            return <P key={index}>{children[0].text}</P>;
          })}
          <Spacer size={SpacerSize.small}></Spacer>
          {websiteUrl && (
            <Button
              onButtonClick={() => {
                if (typeof window !== `undefined`) {
                  window.open(websiteUrl);
                }
              }}
              text={'Take a look'}
            ></Button>
          )}
        </StyledCard>
      </div>
      <StyledBrowserContainer
        onClick={() => {
          if (phoneQueryMatches && typeof window !== `undefined`) {
            window.open(websiteUrl);
          }
        }}
      >
        <Browser small>
          <StyledBrowserImage src={mainImageUrl}></StyledBrowserImage>
        </Browser>
      </StyledBrowserContainer>
    </StyledWebsiteSlide>
  );
};
