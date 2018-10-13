import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//import generateNeonStyling from '../utilities/generate-neon-styling';
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
  return { currentSection: state.section.currentSection };
};

const DownIndicator = ({ currentSection }) => {
  const mainColor = getMainColor(currentSection);

  return (
    <Banner>
      <DownCharacter
        style={
          currentSection
            ? {
                color: 'white',
                textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${mainColor}, 0 0 35px ${mainColor}, 0 0 40px ${mainColor}, 0 0 50px ${mainColor}, 0 0 75px ${mainColor}`
              }
            : null
        }
      >
        ⇪
      </DownCharacter>
    </Banner>
  );
};

const ConnectedDownIndicator = connect(mapStateToProps)(DownIndicator);

export default ConnectedDownIndicator;
