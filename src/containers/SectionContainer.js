import React from 'react'
import styled from 'styled-components'
import AboutMeSection from './AboutMeSection'
import MyTechJourneySection from './MyTechJourneySection'
import ProjectsSection from './ProjectsSection'
import { connect } from 'react-redux'

import { SECTION_BACKGROUND } from '../constants/colors'
import { ABOUT_ME, MY_TECH_JOURNEY, PROJECTS } from '../constants/nav-button-types'

//---------------------STYLING-----------------------

const Container = styled.div`
  width: 100%;
  background: ${ SECTION_BACKGROUND }
  margin: 0;
`

//--------------------COMPONENT----------------------

const mapStateToProps = state => {
  return { currentSection: state.currentSection }
}


const ConnectedSectionContainer = ( { currentSection } ) => {
  let currentSectionJsx
  switch (currentSection) {
    case ABOUT_ME:
      currentSectionJsx = <AboutMeSection/>
        break;
    case MY_TECH_JOURNEY:
      currentSectionJsx = <MyTechJourneySection/>
        break;
    case PROJECTS:
      currentSectionJsx = <ProjectsSection/>
        break;
    default: 
      break
  } 

  return (
    <Container>
      {currentSectionJsx}
    </Container>
  )
}

const SectionContainer = connect(mapStateToProps) (ConnectedSectionContainer)

export default SectionContainer
