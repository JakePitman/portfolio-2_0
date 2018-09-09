import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import SectionContainer from './containers/SectionContainer'
import TvBox from './components/TvBox';
import NavButtons from './components/NavButtons'


const Container = styled.div`
  //max-width: 1140px;
  //margin: auto auto;
  //background: pink;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
`

const TopSection = styled.div`
  background: #97AAB8;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        </TopSection>
          <SectionContainer /> 
      </Container>
    );
  }
}

export default App;
