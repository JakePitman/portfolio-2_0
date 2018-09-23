import React, { Fragment } from 'react';
import styled from 'styled-components';

import Skyscrapers from '../components/MyTechJourneySubComponents/Skyscrapers';
import Timeline from '../components/MyTechJourneySubComponents/Timeline';

//------------------STYLING------------------

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const MyTechJourneySection = ({ mainColor }) => {
  return (
    <Fragment>
      <Container>
        <Timeline />
      </Container>
      <Skyscrapers />;
    </Fragment>
  );
};

export default MyTechJourneySection;
