import React from 'react';
import styled from 'styled-components';

import { PHONE_BREAKPOINT } from '../../constants/media-queries';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const SkyscraperDiv = styled.div`
  width: ${getRandomInt(30, 50)}px;
  @media (min-width: ${PHONE_BREAKPOINT}) {
    width: ${getRandomInt(50, 70)}px;
  }
  height: ${getRandomInt(90, 100)}%;
  padding: 0.5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 2px;
`;

const Light = styled.div`
  width: 10%;
  height: 0;
  padding-top: 10%;
  background: #303335;
  margin: 1%;
  transition: all ${getRandomInt(0.5, 1)}s;
`;

const lights = [];
for (let i = 0; i < 80; i++) {
  lights.push(<Light className={`light-${getRandomInt(1, 5)}`} key={i} />);
}

const Skyscraper = () => (
  <SkyscraperDiv className="skyscraper">{lights}</SkyscraperDiv>
);

export default Skyscraper;
