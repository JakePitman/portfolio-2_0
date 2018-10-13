import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { ABOUT_ME_MAIN_COLOR } from '../constants/colors';
import {
  ABOUT_ME,
  MY_TECH_JOURNEY,
  PROJECTS
} from '../constants/nav-button-types';
import { TOP_SECTION_FONT, SUBHEADING_FONT } from '../constants/fonts';
import { PHONE_BREAKPOINT } from '../constants/media-queries';
import getMainColor from '../utilities/get-main-color';

//-------------------------------STYLING-------------------------

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Frame = styled.div`
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: inset 0 0 2vw black, inset 0 0 3rem black, 0 0 10rem black;
  width: 80vw;
  height: 40vh;
  position: relative;
  margin: 2rem 0;

  @media (min-width: ${PHONE_BREAKPOINT}) {
    width: 500px;
    height: 50vh;
  }
`;

const Output = styled.div`
  background-color: rgba(35, 44, 77);
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Scanlines = styled.div`
  background: repeating-linear-gradient(
    0deg,
    rgba(155, 155, 155, 0.5),
    rgba(235, 235, 235, 0.2) 1px,
    rgba(65, 105, 200, 0.2) 2px,
    rgba(0, 0, 0, 0.2) 3px,
    rgba(0, 0, 0, 0.6) 4px
  );
  width: inherit;
  height: inherit;
  border: 1rem solid;
  border-radius: 1rem;
  position: absolute;
  left: -1rem;
  top: -1rem;
`;

const nameShadowAnimation = keyframes`
  0% { text-shadow: -3px 0.1rem 1rem #004F68 }
  50% { text-shadow: 3px 0.2rem 2rem #004f68 }
  100% { text-shadow: -3px 0.1rem 3rem #004f68 }
`;

const namePaddingAnimation = keyframes`
  0% { padding: 2px 0 0 1px; }
  10% { padding: 0px 0 0 0; }
`;
const Name = styled.div`
  animation: ${nameShadowAnimation} 0.5s infinite;
  animation: ${namePaddingAnimation} 1.5s infinite;
  font-family: ${TOP_SECTION_FONT};
  color: ${ABOUT_ME_MAIN_COLOR};
  font-size: 50px;
  text-align: center;
`;

const flickerAnimation = keyframes`
  0%, 17%, 80% { opacity: 0.4; }
  15% , 30%, 60%, 85%, 95% { opacity: 0; }
`;

const Flicker = styled.div`
  animation: ${flickerAnimation} 2s infinite;
  position: absolute;
  font-family: ${TOP_SECTION_FONT};
  color: rgba(113, 218, 252, 0.3);
  font-size: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  padding-right: 10px;
`;

const SectionTextList = styled.ul`
  padding: 0;
`;

//----------------------COMPONENT--------------------------

const mapStateToProps = (state) => {
  return { currentSection: state.section.currentSection };
};

const TvBox = ({ currentSection }) => {
  const SectionText = styled.li`
    color: white;
    font-family: ${SUBHEADING_FONT};
    text-shadow: 0 0 20px ${getMainColor(currentSection)};
    margin: 20px;
    font-size: 50px;
    list-style: none;
    @media (max-width: ${PHONE_BREAKPOINT}) {
      font-size: 20px;
      margin: 10px;
    }
  `;

  let outputJsx;
  switch (currentSection) {
    case ABOUT_ME:
      outputJsx = (
        <SectionTextList>
          <SectionText>> Who am I? </SectionText>
          <SectionText>> Tech Stacks </SectionText>
          <SectionText>> Interests </SectionText>
        </SectionTextList>
      );
      break;
    case MY_TECH_JOURNEY:
      outputJsx = (
        <SectionTextList>
          <SectionText>> Code Camp</SectionText>
          <SectionText>> Coder Academy</SectionText>
          <SectionText>> Internship </SectionText>
        </SectionTextList>
      );
      break;
    case PROJECTS:
      outputJsx = (
        <SectionTextList>
          <SectionText>> Portfolio 1.0</SectionText>
          <SectionText>> Artistree </SectionText>
          <SectionText>> Social Banana </SectionText>
        </SectionTextList>
      );
      break;
    default:
      outputJsx = (
        <Fragment>
          <Name>Jake Pitman</Name>
          <Flicker>Jake Pitman</Flicker>
        </Fragment>
      );
  }

  return (
    <Container>
      <Frame>
        <Output>{outputJsx}</Output>
        <Scanlines />
      </Frame>
    </Container>
  );
};

const ConnectedTvBox = connect(mapStateToProps)(TvBox);

export default ConnectedTvBox;
