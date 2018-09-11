import React from 'react'
import styled, { keyframes } from 'styled-components'

import { SUBHEADING_FONT } from '../constants/fonts'
import { PHONE_BREAKPOINT } from '../constants/media-queries'

const SubHeading = ( { children, mainColor } ) => {

  const Heading = styled.h1`
    font-size: 150px;
    font-family: ${ SUBHEADING_FONT };
    color: white;
    text-shadow: 0 0 30px ${ mainColor };
    
    @media (max-width: ${ PHONE_BREAKPOINT }) {
      font-size: 10vw;
    }
  `

  return (
    <Heading>{children}</Heading>
  )
}
  
export default SubHeading
