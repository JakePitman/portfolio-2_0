import React from 'react';
import styled from 'styled-components';
import lifecycle from 'react-pure-lifecycle';

import { SECTION_BACKGROUND } from '../../constants/colors';
import Skyscraper from './Skyscraper';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const turnLightsOn = (lights, timeout) => {
  setTimeout(
    () =>
      lights.forEach((light) => {
        light.style.background = 'white';
        light.style.boxShadow = '0 0 20px white';
      }),
    timeout
  );
};
//lifecycle methods
const componentDidMount = (props) => {
  const lights1 = [].slice.call(document.getElementsByClassName('light-1'));
  const lights2 = [].slice.call(document.getElementsByClassName('light-2'));
  const lights3 = [].slice.call(document.getElementsByClassName('light-3'));
  const lights4 = [].slice.call(document.getElementsByClassName('light-4'));
  const lights5 = [].slice.call(document.getElementsByClassName('light-5'));
  turnLightsOn(lights1, 1000);
  turnLightsOn(lights2, 1500);
  turnLightsOn(lights3, 1700);
  turnLightsOn(lights4, 2000);
  turnLightsOn(lights5, 2300);
  window.scrollTo(0, document.body.scrollHeight);
};

const methods = {
  componentDidMount
};

const Skyscrapers = () => {
  //----------------------------STYLING----------------------------

  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
  `;

  const Layer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    bottom: 0;

    &#layer-1 {
      height: 20vh;
      .skyscraper {
        background: #4095ab;
      }
    }
    &#layer-2 {
      height: 25vh;
      .skyscraper {
        background: #6095aa;
      }
    }
    &#layer-3 {
      height: 30vh;
      .skyscraper {
        background: #203c45;
      }
    }
    &#layer-4 {
      height: 27vh;
      .skyscraper {
        background: #294047;
      }
    }
    &#layer-5 {
      height: 35vh;
      justify-content: space-between;
      .skyscraper {
        background: #1e2d32;
      }
    }
  `;

  //Generate Skyscrapers:
  const generateSkyscrapers = () => {
    const rowOfSkyscrapers = [];
    window.innerWidth > 1000;
    for (
      let i = 0;
      i < (window.innerWidth > 1000 ? getRandomInt(6, 8) : getRandomInt(4, 5));
      i++
    ) {
      rowOfSkyscrapers.push(
        <Skyscraper lightOrder={getRandomInt(0, 5)} key={i} />
      );
    }
    return rowOfSkyscrapers;
  };

  //---------------------------COMPONENT----------------------------
  return (
    <Container>
      <Layer id="layer-5">{generateSkyscrapers()}</Layer>
      <Layer id="layer-4">{generateSkyscrapers()}</Layer>
      <Layer id="layer-3">{generateSkyscrapers()}</Layer>
      <Layer id="layer-2">{generateSkyscrapers()}</Layer>
      <Layer id="layer-1">{generateSkyscrapers()}</Layer>
    </Container>
  );
};

export default lifecycle(methods)(Skyscrapers);
