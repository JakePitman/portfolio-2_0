import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeCurrentSection } from '../redux/actions/index.js';
import { TOP_SECTION_FONT } from '../constants/fonts';
import { DEAD_GREY } from '../constants/colors';
import { PHONE_BREAKPOINT } from '../constants/media-queries';

const mapStateToProps = (state) => {
  return { currentSection: state.currentSection };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSection: (newSection) =>
      dispatch(changeCurrentSection(newSection))
  };
};

const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
`;
const Button = styled.h2`
    cursor: pointer;
    color: ${DEAD_GREY}
    box-shadow: 0 0 5px ${DEAD_GREY};
    text-align: center;
    font-size: 50px;
    font-family: ${TOP_SECTION_FONT};
    border-radius: 20px;
    padding: 20px;
    transition: all 0.5s;
    &:hover {
      color: white;
      text-shadow: ${({
        mainColor
      }) => `0 0 2.5px ${mainColor}, 0 0 5px ${mainColor},
        0 0 7.5px ${mainColor}, 0 0 10px ${mainColor}, 0 0 17.5px ${mainColor},
        0 0 20px ${mainColor}, 0 0 25px ${mainColor}, 0 0 37.5px ${mainColor};`}
      box-shadow: ${({
        mainColor
      }) => `0px 0px 0px 2px rgba(255, 255, 255, 0.7),
        0px 0px 0px 5px ${mainColor}, 0px 0px 0px 3px ${mainColor} inset,
        0px 0px 60px ${mainColor}, 0px 0px 60px ${mainColor} inset;`}}
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 20px;
  }
  `;

const BackToTopButton = ({ mainColor, changeCurrentSection, buttonType }) => {
  const handleClick = (e) => {
    e.preventDefault();
    changeCurrentSection(buttonType);
  };

  return (
    <Container>
      <Button mainColor={mainColor} onClick={handleClick}>
        Back to top
      </Button>
    </Container>
  );
};

const ConnectedBackToTopButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackToTopButton);

export default ConnectedBackToTopButton;
