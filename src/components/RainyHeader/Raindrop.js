import React from 'react';
import styled, { keyframes } from 'styled-components';
import lifecycle from 'react-pure-lifecycle';

import { PHONE_BREAKPOINT } from '../../constants/media-queries';

//----------------LIFECYCLE METHODS------------

//store intervals across all Raindrop components
let raindropIntervalArray = [];

const componentDidMount = ({ number, timingOffset }) => {
  const generateRaindropParameters = () => {
    const left = getRandomInt(5, 80);
    const height = getRandomInt(90, 100);
    const fallParametersElement = document.getElementById(
      'fall-parameters-' + number
    );
    if (fallParametersElement === null) {
      return;
    }
    fallParametersElement.style.height = `${height}%`;
    fallParametersElement.style.left = `${left}%`;
  };
  setTimeout(
    () =>
      (raindropIntervalArray[number] = setInterval(
        generateRaindropParameters,
        5000 + timingOffset * 1000
      )),
    0.75 * (5000 + timingOffset * 1000)
  );
};

const componentWillUnmount = ({ number }) => {
  clearInterval(raindropIntervalArray[number]);
};

const methods = {
  componentDidMount,
  componentWillUnmount
};

//----------------Parameter Methods------------

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Raindrop = ({ parameters, number, timingOffset }) => {
  //-------------------STYLING-------------------

  const totalAnimationTime = 5 + timingOffset;

  const FallParameters = styled.div`
    height: 100%;
    position: absolute;
    width: 10%;
    left: -100%;
    z-index: 1;
    @media (max-width: ${PHONE_BREAKPOINT}) {
      width: 100px;
    }
  `;

  const fallAnimation = keyframes`
    0% {
        top: 0%;
      }
    42% {
      width: 3px;
      height: 15px;
      opacity: 1;
    }
    47% {
      opacity: 1%;
    }
    50% {
      width: 15px;
      height: 3px;
      top: 97.5%;
      opacity: 0;
    }
    100% {
      opacity: 0;
      width: 15px;
      height: 3px;
    }
  `;

  const Droplet = styled.div`
    animation: ${fallAnimation} ${totalAnimationTime}s infinite;
    width: 3px;
    height: 15px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 85px 10px #01c2ff;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  `;

  const DropletParameters = styled.div`
    width: 100%;
    height: 5%;
    //border: 1px solid grey;
    position: absolute;
    bottom: 0;
  `;

  const outerCircleAnimation = keyframes`
    0% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
    50% {
      width: 0%;
      height: 0%;
      opacity: 0.7;
    }
    65% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  `;

  const OuterCircle = styled.div`
    animation: ${outerCircleAnimation} ${totalAnimationTime}s infinite;
    opacity: 0;
    border: 1px solid #01c2ff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  `;

  const innerCircleAnimation = keyframes`
    0% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
    30% {
      width: 0%;
      height: 0%;
      opacity: 0;
    }
    50% {
        width: 0%;
        height: 0%;
        opacity: 0.7;
    }
    65% {
      width: 55%;
      height: 55%;
      opacity: 0;
    }
  `;

  const InnerCircle = styled.div`
    animation: ${innerCircleAnimation} ${totalAnimationTime}s infinite;
    opacity: 0;
    border: 1px solid #01c2ff;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  `;
  //----------------------RETURNED COMPONENT---------------

  return (
    <FallParameters id={'fall-parameters-' + number}>
      <Droplet id={'droplet-' + number} />
      <DropletParameters id={'droplet-parameters-' + number}>
        <OuterCircle id={'outer-circle-' + number} />
        <InnerCircle id={'inner-circle-' + number} />
      </DropletParameters>
    </FallParameters>
  );
};

export default lifecycle(methods)(Raindrop);
