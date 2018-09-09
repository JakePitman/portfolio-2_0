import React from 'react'
import styled from 'styled-components'
import {SECTION_BACKGROUND} from '../constants/colors'

const Banner = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${SECTION_BACKGROUND};
  //position: absolute;
  //bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DownArrow = styled.i`
  border: solid grey;
  border-width: 0 7px 7px 0;
  font-size: 50px;
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  display: inline-block;
`


const DownIndicator = () => {

  return (
    <Banner> 
     <p> <DownArrow/></p>
    </Banner>
  )
}

export default DownIndicator
