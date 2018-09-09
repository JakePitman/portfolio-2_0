import React from 'react'
import styled from 'styled-components'
import {SECTION_BACKGROUND} from '../constants/colors'

const Banner = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${SECTION_BACKGROUND};
  //position: absolute;
  //bottom: 0;
`

const DownIndicator = () => {

  return (
    <Banner> 
      <h1>DOWN</h1>
    </Banner>
  )
}

export default DownIndicator
