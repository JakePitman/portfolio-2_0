import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { changeCurrentSection } from '../../redux/actions/index.js'

import generateNeonStyling from '../../utilities/generate-neon-styling'
import getMainColor from '../../utilities/get-main-color'
import { DEAD_GREY } from '../../constants/colors'
import { GEOSTAR } from '../../constants/fonts'
import { PHONE_BREAKPOINT } from '../../constants/media-queries'

//---------------------STYLING------------------------


const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 10vh;
  margin: 1vh;
  background: linear-gradient(rgba(66, 69, 72), rgba(48, 51, 53));
  box-shadow: 0px 5px 0px rgba(36, 39, 42);
  font-family: ${ GEOSTAR };
  font-size: 1.5rem;
  cursor: pointer;
  color: ${DEAD_GREY};
  outline: none;

  @media (min-width: ${PHONE_BREAKPOINT}) {
    width: 400px;
    font-size: 2rem;
  }

`


//--------------------COMPONENT-----------------------


const mapStateToProps = state => {
  return { currentSection: state.currentSection }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentSection: newSection => dispatch(changeCurrentSection(newSection))
  }
}

const ConnectedNavButton = (props) => {

  const handleClick = (e) => {
    e.preventDefault()
    props.changeCurrentSection(props.buttonType)
  }

  const mainColor = getMainColor(props.buttonType)
  return ( 
    <Button 
    style={
      props.currentSection === props.buttonType
      ?
      generateNeonStyling(mainColor)
      :
      null
    }
      onClick={handleClick}
    >{props.children}</Button>
  )
}

const NavButton = connect(mapStateToProps, mapDispatchToProps) (ConnectedNavButton)

export default NavButton
