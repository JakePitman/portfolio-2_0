import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import SectionContainer from './containers/SectionContainer';
import TvBox from './components/TvBox';
import NavButtonsContainer from './containers/NavButtonsContainer';
import DownIndicator from './components/DownIndicator';
import { TOP_SECTION_BACKGROUND } from './constants/colors';

//Fontawesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faYinYang,
  faLanguage,
  faCode,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';
library.add(faYinYang, faLanguage, faCode, faGamepad);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  background: ${TOP_SECTION_BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

class App extends Component {
  state = {
    section: null
  };

  render() {
    return (
      <Container>
        <TopSection>
          <TvBox />
          <NavButtonsContainer />
          <DownIndicator />
        </TopSection>
        <SectionContainer />
      </Container>
    );
  }
}

export default App;
