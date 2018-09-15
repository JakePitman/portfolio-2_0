import React, { Fragment } from 'react';
import styled from 'styled-components';

import SubHeading from '../SubHeading';
import { MAIN_PARAGRAPH_FONT } from '../../constants/fonts';

const TechStacks = ({ mainColor }) => {
  //-----------------------------STYLING-----------------------------

  const OverallContainer = styled.div`
    height: 100vh;
    display: flex;
    border: 1px solid pink;
    flex-direction: column;
    align-items: center;
  `;
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    border: 1px solid green;
    display: flex;
  `;

  const StackContainer = styled.div`
    width: 50%;
    height: 100%;
    border: 1px solid grey;
    position: relative;
  `;

  const Diamond = styled.div`
    position: absolute;
    height: 200px;
    width: 200px;
    line-height: 200px;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    transition: all 1.5s;
    &:before {
      position: absolute;
      content: '';
      bottom: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      transform: rotateX(45deg) rotateZ(45deg);
      box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.5);
    }
  `;

  const First = styled(Diamond)`
    z-index: 3;
    ${Container}:hover & {
      bottom: 470px;
    }
    &:before {
      background: rgba(1, 194, 255, 0.9);
    }
  `;
  const Second = styled(Diamond)`
    z-index: 2;
    ${Container}:hover & {
      bottom: 320px;
    }
    &:before {
      background: rgba(1, 194, 245, 0.9);
    }
  `;
  const Third = styled(Diamond)`
    z-index: 1;
    ${Container}:hover & {
      bottom: 170px;
    }
    &:before {
      background: rgba(1, 194, 235, 0.9);
    }
  `;
  const Fourth = styled(Diamond)`
    z-index: 0;
    &:before {
      background: rgba(1, 194, 225, 0.9);
    }
  `;

  const Text = styled.p`
    font-family: ${MAIN_PARAGRAPH_FONT};
    postion: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto;
    color: white;
    transform: rotateX(45deg) rotateZ(-45deg);
    font-size: 50px;
    text-shadow: 0 0 30px;
  `;

  return (
    <OverallContainer>
      <SubHeading mainColor={mainColor}>Tech Stacks</SubHeading>;
      <Container>
        <StackContainer>
          <Second>
            <Text>Ruby</Text>
          </Second>
          <Third>
            <Text>Rails</Text>
          </Third>
          <Fourth>
            <Text>Postgres</Text>
          </Fourth>
        </StackContainer>
        <StackContainer>
          <First>
            <Text>Node</Text>
          </First>
          <Second>
            <Text>React</Text>
          </Second>
          <Third>
            <Text>Express</Text>
          </Third>
          <Fourth>
            <Text>MongoDB</Text>
          </Fourth>
        </StackContainer>
      </Container>
    </OverallContainer>
  );
};

export default TechStacks;
