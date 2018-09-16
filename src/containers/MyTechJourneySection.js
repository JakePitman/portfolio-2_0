import React from 'react';
import styled from 'styled-components';

import WorkInProgressSign from '../components/WorkInProgressSign';
import { MY_TECH_JOURNEY_MAIN_COLOR, DEAD_GREY } from '../constants/colors';
import { TOP_SECTION_FONT, MAIN_PARAGRAPH_FONT } from '../constants/fonts';
import { PHONE_BREAKPOINT } from '../constants/media-queries';

//------------------STYLING------------------

const MainColorText = styled.span`
  color: ${MY_TECH_JOURNEY_MAIN_COLOR}
  font-family: ${TOP_SECTION_FONT}
`;
const ComingSoon = styled.h1`
  font-size: 1.5rem;
  font-family: ${MAIN_PARAGRAPH_FONT};
  text-align: center;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${DEAD_GREY};
  @media (min-width: ${PHONE_BREAKPOINT}) {
    font-size: 100px;
  }
`;

const MyTechJourneySection = () => {
  return (
    <ComingSoon>
      <MainColorText>My Tech Journey</MainColorText> is coming soon!
    </ComingSoon>
  );
};

export default MyTechJourneySection;
