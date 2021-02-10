import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PathfindingVisualizer from '../UI/pathfinding/components/PathfindingVisualizer';
import ControlsContainer from '../UI/pathfinding/components/controls/ControlsContainer';
import Menu from '../UI/pathfinding/components/menu/Menu';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #252a4a;
`;

function PathfindingPage() {
  const visualizer = useRef();
  const [alterMode, setAlterMode] = useState('isWall');
  const [algo, setAlgo] = useState('dijkstra');
  const visualize = (algoType) => {
    visualizer.current.visualizeAlgo();
  };
  const onChangeAlterMode = (mode) => {
    setAlterMode(mode);
  };
  const onChangeAlgo = (newAlgo) => {
    setAlgo(newAlgo);
  };
  return (
    <AppContainer>
      <Menu visualize={visualize}>
        <ControlsContainer
          onChangeAlterMode={onChangeAlterMode}
          onChangeAlgo={onChangeAlgo}
        ></ControlsContainer>
      </Menu>
      <PathfindingVisualizer
        ref={visualizer}
        alterMode={alterMode}
        algo={algo}
      ></PathfindingVisualizer>
    </AppContainer>
  );
}

export default PathfindingPage;
