import React from 'react';
import styled from 'styled-components';
import AboutMeSection from './AboutMeSection';
import MyTechJourneySection from './MyTechJourneySection';
import ProjectsSection from './ProjectsSection';
import { connect } from 'react-redux';

import getMainColor from '../utilities/get-main-color';
import { SECTION_BACKGROUND } from '../constants/colors';
import {
  ABOUT_ME,
  MY_TECH_JOURNEY,
  PROJECTS
} from '../constants/nav-button-types';

//---------------------STYLING-----------------------

const Container = styled.div`
  width: 100%;
  background: ${SECTION_BACKGROUND}
  margin: 0;
`;

//--------------------COMPONENT----------------------

const mapStateToProps = (state) => {
  return { currentSection: state.currentSection };
};

const ConnectedSectionContainer = ({ currentSection }) => {
  let currentSectionJsx;
  switch (currentSection) {
    case ABOUT_ME:
      currentSectionJsx = (
        <AboutMeSection mainColor={getMainColor(currentSection)} />
      );
      break;
    case MY_TECH_JOURNEY:
      currentSectionJsx = (
        <MyTechJourneySection mainColor={getMainColor(currentSection)} />
      );
      break;
    case PROJECTS:
      currentSectionJsx = (
        <ProjectsSection mainColor={getMainColor(currentSection)} />
      );
      break;
    default:
      break;
  }

  return <Container>{currentSectionJsx}</Container>;
};

const SectionContainer = connect(mapStateToProps)(ConnectedSectionContainer);

export default SectionContainer;
