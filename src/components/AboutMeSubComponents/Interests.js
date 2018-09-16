import React from 'react';
import styled, { keyframes } from 'styled-components';
import lifecycle from 'react-pure-lifecycle';

import generateScrollEffect from '../../utilities/generate-scroll-effect';
import SubHeading from '../SubHeading';
import Interest from './Interest';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

//------------------SETUP SCROLL LISTENER-----------------

function callbackFunction() {
  generateScrollEffect(document.getElementById('interests-container'), () =>
    attachScrollStyles()
  );
}

const attachScrollStyles = () => {
  const interestContainers = [].slice.call(
    document.getElementsByClassName('interest-container')
  );
  const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;
  interestContainers.forEach((container, i) => {
    container.style.animation = `${appearAnimation} 1s forwards`;
    container.style.animationDelay = `${i / 2}s`;
  });
  const interestTextElements = [].slice.call(
    document.getElementsByClassName('interest-text')
  );
  interestTextElements.forEach((textElement) => {
    textElement.style.animation = `${appearAnimation} 1s forwards`;
    textElement.style.animationDelay = `${interestContainers.length / 2 +
      0.5}s`;
  });
  window.removeEventListener('scroll', callbackFunction);
};

const componentDidMount = (props) => {
  window.addEventListener('scroll', callbackFunction);
};

const componentWillUnmount = (props) => {
  window.removeEventListener('scroll', callbackFunction);
};

const methods = {
  componentDidMount,
  componentWillUnmount
};

const Interests = ({ mainColor }) => {
  //-----------------------STYLING-------------------------

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
    width: 100%;
    margin-top: 20vh;
  `;
  const InterestsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${PHONE_BREAKPOINT}) {
      flex-direction: column;
      align-items: center;
      height: 80vh;
    }
  `;

  return (
    <Container>
      <SubHeading mainColor={mainColor}>Interests</SubHeading>;
      <InterestsContainer id="interests-container">
        <Interest icon="code" text="Code" />
        <Interest icon="yin-yang" text="Tai Chi" />
        <Interest icon="language" text="Japanese" />
        <Interest icon="gamepad" text="Games" />
      </InterestsContainer>
    </Container>
  );
};

export default lifecycle(methods)(Interests);
