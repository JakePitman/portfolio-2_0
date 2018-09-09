import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { ABOUT_ME, MY_TECH_JOURNEY, PROJECTS } from '../constants/nav-button-types'
import { 
  SECTION_BACKGROUND,
  DEAD_GREY,
  ABOUT_ME_MAIN_COLOR,
  MY_TECH_JOURNEY_MAIN_COLOR,
  PROJECTS_MAIN_COLOR
} from '../constants/colors'

//---------------------STYLING-----------------------

const Banner = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${SECTION_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
`
//---------------------COMPONENT---------------------

const mapStateToProps = state => {
  return { currentSection: state.currentSection }
}


const ConnectedDownIndicator = ({ currentSection }) => {

  let mainColor;
  switch (currentSection) {
    case ABOUT_ME:
      mainColor = ABOUT_ME_MAIN_COLOR
      break;
    case MY_TECH_JOURNEY:
      mainColor = MY_TECH_JOURNEY_MAIN_COLOR
      break;
    case PROJECTS:
      mainColor = PROJECTS_MAIN_COLOR
      break;
    default:
      mainColor = DEAD_GREY
  }

// using styles object to make dynamically changing color easier
const downArrowStyles = {
  borderRight: `solid ${mainColor}`,
  borderBottom: `solid ${mainColor}`,
  borderWidth: '0 3px 3px 0',
  width: '30px',
  height: '30px',
  transform: 'rotate(45deg)',
  display: 'inline-block'
}

  return (
    <Banner> 
     <p><i style={downArrowStyles} /></p>
    </Banner>
  )
}

const DownIndicator = connect(mapStateToProps) (ConnectedDownIndicator)

export default DownIndicator
