import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import lifecycle from 'react-pure-lifecycle';

import generateScrollEffect from '../../utilities/generate-scroll-effect';
import SubHeading from '../SubHeading';
import { MAIN_PARAGRAPH_FONT } from '../../constants/fonts';

//-------------------SETUP LIFECYCLE METHODS FOR EVENT LISTENER--------------------

function callbackFunction() {
  generateScrollEffect(
    document.getElementById('staggered-appearance-paragraph'),
    () => attachScrollStyles()
  );
}

const attachScrollStyles = () => {
  const firstTextElements = document.getElementsByClassName('first-text');
  const firstTextArr = [].slice.call(firstTextElements);
  const appearAnimation = keyframes`
    0%, 25% {
      opacity: 0.2;
    }
    24%, 100% {
      opacity: 1;
    }
    `;
  firstTextArr.forEach((elem, i) => {
    elem.style.animation = `${appearAnimation} 0.5s forwards`;
    elem.style.animationDelay = `${i + 1}s`;
  });
  const secondTextElements = document.getElementsByClassName('second-text');
  const secondTextArr = [].slice.call(secondTextElements);
  secondTextArr.forEach((elem) => {
    elem.style.animation = `${appearAnimation} 0.5s forwards`;
    elem.style.animationDelay = `${firstTextArr.length + 1}s`;
  });
  window.removeEventListener('scroll', callbackFunction);
};

const componentDidMount = (props) => {
  //function passed to scroll listener
  //setup scroll listener
  window.addEventListener('scroll', callbackFunction);
};

const componentWillUnmount = (props) => {
  window.removeEventListener('scroll', callbackFunction);
};

const methods = {
  componentDidMount,
  componentWillUnmount
};
//-----------------------------------STYLING-------------------------------
const Container = styled.div`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StaggeredAppearanceParagraph = ({ mainColor }) => {
  const Paragraph = styled.p`
    font-family: ${MAIN_PARAGRAPH_FONT};
    font-size: 40px;
    text-align: center;
    margin-bottom: 20vh;
  `;

  const appear = keyframes`
    0% {
      opacity: 1;
      text-shadow: 0 0 10px ${mainColor};
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 10px ${mainColor};
    }
  `;

  const FirstText = styled.span`
    &.first-text {
      color: ${mainColor};
      animation: ${appear} 1s infinite;
      opacity: 0;
      text-shadow: 0 0 20px ${mainColor};
    }
  `;

  const SecondText = styled.span`
    &.second-text {
      animation: ${appear} 1s infinite;
      color: white;
      opacity: 0;
      text-shadow: 0 0 20px ${mainColor};
    }
  `;
  //-----------------------------RETURNED COMPONENT----------------------------
  return (
    <Container>
      <SubHeading mainColor={mainColor}>Who am I?</SubHeading>
      <Paragraph id="staggered-appearance-paragraph">
        <SecondText className="second-text">I’m </SecondText>{' '}
        <FirstText className="first-text">Jake:</FirstText>
        <br />
        <br />
        <SecondText className="second-text">I’m</SecondText>{' '}
        <FirstText className="first-text">calm</FirstText>{' '}
        <SecondText className="second-text">
          under pressure, and strive to be{' '}
        </SecondText>{' '}
        <FirstText className="first-text">clear-minded</FirstText>{' '}
        <SecondText className="second-text">
          in all that I do.
          <br />
          <br />
          I’m{' '}
        </SecondText>{' '}
        <FirstText className="first-text">inspired</FirstText>{' '}
        <SecondText className="second-text">
          to work as a developer so that I can be both{' '}
        </SecondText>{' '}
        <FirstText className="first-text">a teacher and a student</FirstText>{' '}
        <SecondText className="second-text">my whole life.</SecondText>
      </Paragraph>
    </Container>
  );
};

export default lifecycle(methods)(StaggeredAppearanceParagraph);
