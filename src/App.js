import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import SectionContainer from './containers/SectionContainer'
import TvBox from './components/TvBox';
import NavButtons from './components/NavButtons'
import DownIndicator from './components/DownIndicator'

import { TOP_SECTION_BACKGROUND } from './constants/colors'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TopSection = styled.div`
  background: ${TOP_SECTION_BACKGROUND};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`

class App extends Component {

  state = {
    section: null
  }

  render() {
    return (
      <Container>
        <TopSection>
          <TvBox />
          <NavButtons />
          <DownIndicator />
        </TopSection>
          <SectionContainer /> 
      </Container>
    );
  }
}

export default App;
