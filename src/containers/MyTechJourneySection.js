import React from 'react';
import styled from 'styled-components';

import { MY_TECH_JOURNEY_MAIN_COLOR, DEAD_GREY } from '../constants/colors';
import { TOP_SECTION_FONT, MAIN_PARAGRAPH_FONT } from '../constants/fonts';
import { PHONE_BREAKPOINT } from '../constants/media-queries';
import Skyscrapers from '../components/MyTechJourneySubComponents/Skyscrapers';

//------------------STYLING------------------

const MyTechJourneySection = () => {
  return <Skyscrapers />;
};

export default MyTechJourneySection;
