import React from 'react'
import styled from 'styled-components'

import { PROJECTS_MAIN_COLOR, DEAD_GREY } from '../constants/colors'
import { GEOSTAR, SHARE_TECH } from '../constants/fonts'

//------------------STYLING------------------

const MainColorText = styled.span`
  color: ${ PROJECTS_MAIN_COLOR }
  font-family: ${ GEOSTAR }
`
const ComingSoon = styled.h1`
  font-size: 100px;
  font-family: ${SHARE_TECH};
  text-align: center;
  width: 100%;
  color: ${DEAD_GREY}
`

const ProjectsSection = () => {

  return (
    <ComingSoon><MainColorText>Projects</MainColorText> is coming soon!</ComingSoon>
  )
}

export default ProjectsSection
