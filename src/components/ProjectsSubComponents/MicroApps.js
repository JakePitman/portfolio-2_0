import React from 'react';
import styled from 'styled-components';

import { TOP_SECTION_FONT, SHARE_TECH } from '../../constants/fonts';
import { SECTION_BACKGROUND } from '../../constants/colors';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

const Container = styled.div`
  height: 80vh;
  width: 80%;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const MicroAppsHeading = styled.h1`
  font-family: ${TOP_SECTION_FONT};
  color: ${SECTION_BACKGROUND};
  font-size: 100px;
  text-align: center;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 50px;
  }
`;

const ComingSoon = styled.h1`
  font-family: ${SHARE_TECH};
  color: ${SECTION_BACKGROUND};
  font-size: 100px;
  text-align: center;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 50px;
  }
`;

const MicroApps = () => (
  <Container>
    <MicroAppsHeading>Micro Apps</MicroAppsHeading>
    <ComingSoon>will be added soon!</ComingSoon>
  </Container>
);

export default MicroApps;
