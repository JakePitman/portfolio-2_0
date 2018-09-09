import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { ABOUT_ME, MY_TECH_JOURNEY, PROJECTS } from '../constants/nav-button-types'
import { 
  ABOUT_ME_MAIN_COLOR, 
  MY_TECH_JOURNEY_MAIN_COLOR, 
  PROJECTS_MAIN_COLOR, 
  DEAD_GREY 
} from '../constants/colors'
import { PHONE_BREAKPOINT } from '../constants/media-queries'


const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 10vh;
  margin: 1vh;
  background: linear-gradient(rgba(66, 69, 72), rgba(48, 51, 53));
  box-shadow: 0px 5px 0px rgba(36, 39, 42);
  font-family: 'Geostar', cursive;
  font-size: 1.5rem;
  //color: ${DEAD_GREY};

  @media (min-width: ${PHONE_BREAKPOINT}) {
    width: 400px;
    font-size: 2rem;
  }
`

const mapStateToProps = state => {
  return { currentSection: state.currentSection }
}

const ConnectedNavButton = (props) => {

  let mainColor
  switch (props.buttonType) {
    case ABOUT_ME:
      mainColor = ABOUT_ME_MAIN_COLOR;
      break;
    case MY_TECH_JOURNEY:
      mainColor = MY_TECH_JOURNEY_MAIN_COLOR;
      break;
    case PROJECTS:
      mainColor = PROJECTS_MAIN_COLOR;
      break;
    default: 
      mainColor = DEAD_GREY
      break
  }

  return ( 
    <Button 
      style={
        props.currentSection == props.buttonType 
        ? 
        {color: mainColor} 
        : 
        {color: DEAD_GREY}
      }
    >{props.children}</Button>
  )
}

const NavButton = connect(mapStateToProps) (ConnectedNavButton)

export default NavButton
