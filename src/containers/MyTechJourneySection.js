import React from 'react'
import styled from 'styled-components'

import { MY_TECH_JOURNEY_MAIN_COLOR, DEAD_GREY } from '../constants/colors'
import { GEOSTAR, SHARE_TECH } from '../constants/fonts'

//------------------STYLING------------------

const MainColorText = styled.span`
  color: ${ MY_TECH_JOURNEY_MAIN_COLOR }
  font-family: ${ GEOSTAR }
`
const ComingSoon = styled.h1`
  font-size: 100px;
  font-family: ${SHARE_TECH};
  text-align: center;
  width: 100%;
  color: ${DEAD_GREY}
`

const MyTechJourneySection = () => {

  return (
    <ComingSoon><MainColorText>My Tech Journey</MainColorText> is coming soon!</ComingSoon>
  )
}

export default MyTechJourneySection
