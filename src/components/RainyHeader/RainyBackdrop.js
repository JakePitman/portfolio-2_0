import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Raindrop from './Raindrop';

const RainyHeader = ({ mainColor }) => {
  //---------------------STYLING-------------------

  const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
  `;

  //----------------RETURNED COMPONENT-------------

  return (
    <Container id="rainy-backdrop">
      <Raindrop mainColor={mainColor} number="1" timingOffset={0.4} />
      <Raindrop mainColor={mainColor} number="2" timingOffset={1.0} />
      <Raindrop mainColor={mainColor} number="3" timingOffset={1.6} />
      <Raindrop mainColor={mainColor} number="4" timingOffset={2.0} />
      <Raindrop mainColor={mainColor} number="5" timingOffset={2.8} />
      <Raindrop mainColor={mainColor} number="6" timingOffset={3.2} />
      <Raindrop mainColor={mainColor} number="7" timingOffset={3.9} />
      <Raindrop mainColor={mainColor} number="8" timingOffset={4.3} />
      <Raindrop mainColor={mainColor} number="9" timingOffset={4.9} />
    </Container>
  );
};

export default RainyHeader;
