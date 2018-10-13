import React from 'react';
import styled from 'styled-components';

import getMainColor from '../../utilities/get-main-color';

import {
  ABOUT_ME,
  MY_TECH_JOURNEY,
  PROJECTS
} from '../../constants/nav-button-types';

import NavButton from './NavButton';

//------------------STYLING-------------------

const ButtonList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

//----------------COMPONENT-----------------

const NavButtons = ({ currentSection, changeCurrentSection }) => {
  return (
    <ButtonList>
      <NavButton
        isCurrent={currentSection === ABOUT_ME}
        handleClick={() => changeCurrentSection(ABOUT_ME)}
        mainColor={getMainColor(ABOUT_ME)}
      >
        About Me
      </NavButton>
      <NavButton
        isCurrent={currentSection === MY_TECH_JOURNEY}
        handleClick={() => changeCurrentSection(MY_TECH_JOURNEY)}
        mainColor={getMainColor(MY_TECH_JOURNEY)}
      >
        My Tech Journey
      </NavButton>
      <NavButton
        isCurrent={currentSection === PROJECTS}
        handleClick={() => changeCurrentSection(PROJECTS)}
        mainColor={getMainColor(PROJECTS)}
      >
        Projects
      </NavButton>
    </ButtonList>
  );
};

export default NavButtons;
