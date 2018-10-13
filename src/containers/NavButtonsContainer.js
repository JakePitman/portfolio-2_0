import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentSection } from '../redux/actions/index.js';

import NavButtons from '../components/NavButtons/NavButtons';

const mapStateToProps = (state) => {
  return { currentSection: state.section.currentSection };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSection: (newSection) =>
      dispatch(changeCurrentSection(newSection))
  };
};

const NavButtonsContainer = ({ currentSection, changeCurrentSection }) => {
  return (
    <NavButtons
      currentSection={currentSection}
      changeCurrentSection={changeCurrentSection}
    />
  );
};

const ConnectedNavButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavButtonsContainer);

export default ConnectedNavButtonsContainer;
