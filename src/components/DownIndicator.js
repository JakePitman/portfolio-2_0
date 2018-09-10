import React from 'react'
import styled, { keyframes } from 'styled-components'
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

const DownCharacter = styled.p`
  color: ${DEAD_GREY};
  font-size: 5vh;
  font-family: comic-sans;
  transform: rotate(180deg);
  margin: 0;
`

//---------------------COMPONENT---------------------

const mapStateToProps = state => {
  return { currentSection: state.currentSection }
}


const ConnectedDownIndicator = ({ currentSection }) => {

  //get main color
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
      mainColor = null
  }

  //set glow animation keyframes with main color
  const glowAnimation = keyframes`
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px ${mainColor}, 0 0 70px ${mainColor}, 0 0 80px ${mainColor}, 0 0 100px ${mainColor}, 0 0 150px ${mainColor};
      }
      to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${mainColor}, 0 0 35px ${mainColor}, 0 0 40px ${mainColor}, 0 0 50px ${mainColor}, 0 0 75px ${mainColor};
      }
  `

// using styles object to make dynamically changing color easier
//const downArrowStyles = {
  //borderRight: `solid ${mainColor}`,
  //borderBottom: `solid ${mainColor}`,
  //borderWidth: '0 3px 3px 0',
  //width: '30px',
  //height: '30px',
  //transform: 'rotate(45deg)',
  //display: 'inline-block'
//}

  return (
    <Banner> 
     <p>
    <DownCharacter 
      style={
        currentSection
        ?
        {
          color: 'white',
          animation: `${glowAnimation} 1.5s ease-in-out infinite alternate`
        }
        :
        null
      }
    >⇪</DownCharacter></p>
    </Banner>
  )
}

const DownIndicator = connect(mapStateToProps) (ConnectedDownIndicator)

export default DownIndicator
