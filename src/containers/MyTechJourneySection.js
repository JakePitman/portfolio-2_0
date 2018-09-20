import React, { Fragment } from 'react';
import styled from 'styled-components';

import { MY_TECH_JOURNEY_MAIN_COLOR, DEAD_GREY } from '../constants/colors';
import { TOP_SECTION_FONT, MAIN_PARAGRAPH_FONT } from '../constants/fonts';
import { PHONE_BREAKPOINT } from '../constants/media-queries';
import Skyscrapers from '../components/MyTechJourneySubComponents/Skyscrapers';
import WorkInProgressSign from '../components/WorkInProgressSign';

//------------------STYLING------------------

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const MyTechJourneySection = ({ mainColor }) => {
  return (
    <Fragment>
      <Container>
        <WorkInProgressSign mainColor={mainColor} />
      </Container>
      <Skyscrapers />;
    </Fragment>
  );
};

export default MyTechJourneySection;
