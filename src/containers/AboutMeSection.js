import React from 'react'
import styled from 'styled-components'

import RainyHeader from '../components/RainyHeader/RainyHeader'
//import { ABOUT_ME_MAIN_COLOR, DEAD_GREY } from '../constants/colors'
//import { GEOSTAR, SHARE_TECH } from '../constants/fonts'
//import { PHONE_BREAKPOINT } from '../constants/media-queries'

//------------------STYLING------------------

  const MainContainer = styled.div`
    position: relative;
  `

  const ContentContainer = styled.div`
    position: relative;
    z-index: 1;
    border: 1px solid pink;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

const AboutMeSection = ({ mainColor }) => {

  //<RainyHeader mainColor={mainColor} /> 
  return (
    <MainContainer>
      <ContentContainer>
        <h1>About me</h1>
      </ContentContainer>
    </MainContainer>
  )
}

export default AboutMeSection
