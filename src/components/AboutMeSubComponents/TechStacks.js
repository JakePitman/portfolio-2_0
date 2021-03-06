import React from 'react';
import styled from 'styled-components';
import lifecycle from 'react-pure-lifecycle';

import generateScrollEffect from '../../utilities/generate-scroll-effect';
import SubHeading from '../SubHeading';
import { MAIN_PARAGRAPH_FONT } from '../../constants/fonts';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';
import { ABOUT_ME_MAIN_COLOR_TRANSLUCENT } from '../../constants/colors';

//------------------------------SETUP SCROLL LISTENER---------------

function callbackFunction() {
  generateScrollEffect(document.getElementById('tech-stacks-container'), () =>
    attachScrollStyles()
  );
}

//set bottom property to diamonds according to position
const attachScrollStyles = () => {
  const firstDiamonds = [].slice.call(document.getElementsByClassName('first'));
  firstDiamonds.forEach((diamond) => {
    diamond.style.bottom = '48vh';
  });
  const secondDiamonds = [].slice.call(
    document.getElementsByClassName('second')
  );
  secondDiamonds.forEach((diamond) => {
    diamond.style.bottom = '33vh';
  });
  const thirdDiamonds = [].slice.call(document.getElementsByClassName('third'));
  thirdDiamonds.forEach((diamond) => {
    diamond.style.bottom = '18vh';
  });
  window.removeEventListener('scroll', callbackFunction);
};

const componentDidMount = () => {
  window.addEventListener('scroll', callbackFunction);
};

const componentWillUnmount = (props) => {
  window.removeEventListener('scroll', callbackFunction);
};

const methods = {
  componentDidMount,
  componentWillUnmount
};

//-----------------------------STYLING-----------------------------

const OverallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    margin-top: 15vh;
  }
`;
const Container = styled.div`
  height: 75vh;
  position: relative;
  width: 100%;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    height: 80vh;
    width: 100vw;
  }
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

const StackContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const Diamond = styled.div`
  position: absolute;
  height: 180px;
  width: 180px;
  line-height: 180px;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  transition: all 2.5s;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    width: 30vw;
    height: 30vw;
  }
  &:before {
    position: absolute;
    content: '';
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    transform: rotateX(45deg) rotateZ(45deg);
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.5);
    background: ${ABOUT_ME_MAIN_COLOR_TRANSLUCENT};
  }
`;

const First = styled(Diamond)`
  z-index: 3;
  //&:before {
  //background: rgba(1, 194, 255, 0.9);
  //}
`;
const Second = styled(Diamond)`
  z-index: 2;
  //&:before {
  //background: rgba(1, 194, 245, 0.9);
  //}
`;
const Third = styled(Diamond)`
  z-index: 1;
  //&:before {
  //background: rgba(1, 194, 235, 0.9);
  //}
`;
const Fourth = styled(Diamond)`
  z-index: 0;
  //&:before {
  //background: rgba(1, 194, 225, 0.9);
  //}
`;

const Content = styled.div`
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
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 30px;
    line-height: 30vw;
  }
`;

const Text = styled.div`
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
`;

const Icon = styled.i``;

const TechStacks = ({ mainColor }) => (
  <OverallContainer>
    <SubHeading mainColor={mainColor}>Tech Stacks</SubHeading>;
    <Container id="tech-stacks-container">
      <StackContainer>
        <Second className="second">
          <Content>
            <Icon className="devicon-ruby-plain" />
            <Text>
              <p>Ruby</p>
            </Text>
          </Content>
        </Second>
        <Third className="third">
          <Content>
            <Text>
              <p>Rails</p>
            </Text>
            <Icon className="devicon-rails-plain" />
          </Content>
        </Third>
        <Fourth className="fourth">
          <Content>
            <Text>
              <p>Postgres</p>
            </Text>
            <Icon className="devicon-postgresql-plain" />
          </Content>
        </Fourth>
      </StackContainer>
      <StackContainer>
        <First className="first">
          <Content>
            <Text>
              <p>Node</p>
            </Text>
            <Icon className="devicon-nodejs-plain" />
          </Content>
        </First>
        <Second className="second">
          <Content>
            <Text>
              <p>React</p>
            </Text>
            <Icon className="devicon-react-original" />
          </Content>
        </Second>
        <Third className="third">
          <Content>
            <Text>
              <p>Express</p>
            </Text>
            <Icon className="devicon-express-original" />
          </Content>
        </Third>
        <Fourth className="fourth">
          <Content>
            <Text>
              <p>MongoDB</p>
            </Text>
            <Icon className="devicon-mongodb-plain" />
          </Content>
        </Fourth>
      </StackContainer>
    </Container>
  </OverallContainer>
);

export default lifecycle(methods)(TechStacks);
