import React from 'react'
import styled from 'styled-components'

import { PHONE_BREAKPOINT } from '../constants/media-queries'
import { DEAD_GREY } from '../constants/colors'

const ButtonList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

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
  color: ${DEAD_GREY};

  @media (min-width: ${PHONE_BREAKPOINT}) {
    width: 400px;
    font-size: 2rem;
  }
`
const NavButtons = () => {
  return(
    <ButtonList>
      <Button>About Me</Button>
      <Button>My Tech Journey</Button>
      <Button>Projects</Button>
    </ButtonList>
  )
}

export default NavButtons
