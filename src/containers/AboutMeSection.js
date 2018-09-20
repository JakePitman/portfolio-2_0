import React from 'react';
import styled from 'styled-components';

import RainyBackdrop from '../components/RainyHeader/RainyBackdrop';
import Interests from '../components/AboutMeSubComponents/Interests';
import StaggeredAppearanceParagraph from '../components/AboutMeSubComponents/StaggeredAppearanceParagraph';
import TechStacks from '../components/AboutMeSubComponents/TechStacks';

//------------------STYLING------------------

const MainContainer = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  //border: 1px solid pink;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeSection = ({ mainColor }) => {
  return (
    <MainContainer>
      {window.innerWidth > 1000 ? (
        <RainyBackdrop mainColor={mainColor} />
      ) : null}
      <ContentContainer>
        <StaggeredAppearanceParagraph mainColor={mainColor} />
        <TechStacks mainColor={mainColor} />
        <Interests mainColor={mainColor} />
      </ContentContainer>
    </MainContainer>
  );
};

export default AboutMeSection;
