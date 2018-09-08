import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import TvBox from './components/TvBox';

const Container = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <Container>
        <TvBox />
      </Container>
    );
  }
}

export default App;
