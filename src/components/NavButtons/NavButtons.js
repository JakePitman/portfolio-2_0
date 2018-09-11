import React from 'react'
import styled from 'styled-components'

import { ABOUT_ME, MY_TECH_JOURNEY, PROJECTS } from '../../constants/nav-button-types'

import NavButton from './NavButton'

//------------------STYLING-------------------

const ButtonList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

//----------------COMPONENT-----------------


const NavButtons = ( props ) => {
  return(
    <ButtonList>
      <NavButton buttonType={ABOUT_ME}>About Me</NavButton>
      <NavButton buttonType={MY_TECH_JOURNEY}>My Tech Journey</NavButton>
      <NavButton buttonType={PROJECTS}>Projects</NavButton>
    </ButtonList>
  )
}


export default NavButtons
