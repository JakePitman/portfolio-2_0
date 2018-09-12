import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import generateNeonStyling from '../utilities/generate-neon-styling';
import getMainColor from '../utilities/get-main-color';
import { SECTION_BACKGROUND, DEAD_GREY } from '../constants/colors';

//---------------------STYLING-----------------------

const Banner = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${SECTION_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownCharacter = styled.p`
  color: ${DEAD_GREY};
  font-size: 5vh;
  font-family: comic-sans;
  transform: rotate(180deg);
  margin: 0;
`;

//---------------------COMPONENT---------------------

const mapStateToProps = (state) => {
  return { currentSection: state.currentSection };
};

const ConnectedDownIndicator = ({ currentSection }) => {
  const mainColor = getMainColor(currentSection);

  return (
    <Banner>
      <DownCharacter
        style={currentSection ? generateNeonStyling(mainColor) : null}
      >
        ⇪
      </DownCharacter>
    </Banner>
  );
};

const DownIndicator = connect(mapStateToProps)(ConnectedDownIndicator);

export default DownIndicator;
