import React from 'react';
import styled from 'styled-components';
import GeneralStyles from '../../../assets/styles/general-styles';

const StyledBrowser = styled.figure`
  width: ${(props) => (props.small ? '800px' : '1011px')};
  height: ${(props) => (props.small ? '472px' : '596px')};
  border-radius: 10px;
  background: ${GeneralStyles.colors.blue.light};
  box-shadow: 10px 30px 79px rgba(0, 0, 0, 0.31);
  overflow: hidden;

  @media (max-width: 1000px) {
    width: ${(props) => (props.small ? '600px' : '1011px')};
    height: ${(props) => (props.small ? '354px' : '596px')};
  }

  @media (max-width: 768px) {
    ${(props) => (props.small ? 'margin: 0;' : null)}
    width: ${(props) => (props.small ? '100%' : '763px')};
    height: ${(props) => (props.small ? 'auto' : '450px')};
  }
`;

const StyledBrowserControlContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
`;

const StyledWebsiteContainer = styled.div`
  height: 88%;
  width: 100%;
  position: relative;
`;

const StyledBrowserDot = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 100%;
  margin-right: 12px;
  background-color: ${(props) => {
    switch (props.color) {
      case 'red':
        return '#DB0000';
      case 'yellow':
        return '#FFB60A';
      case 'green':
        return '#48E208';
      default:
        return '#48E208';
    }
  }};
`;

const StyledScrollbar = styled.div`
  position: absolute;
  top: 25px;
  right: 8px;
  height: 34%;
  width: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export default function Browser({ children, small }) {
  return (
    <StyledBrowser small={small}>
      <StyledBrowserControlContainer>
        <StyledBrowserDot color="red"></StyledBrowserDot>
        <StyledBrowserDot color="yellow"></StyledBrowserDot>
        <StyledBrowserDot color="green"></StyledBrowserDot>
      </StyledBrowserControlContainer>
      <StyledWebsiteContainer>
        {children}
        <StyledScrollbar></StyledScrollbar>
      </StyledWebsiteContainer>
    </StyledBrowser>
  );
}
