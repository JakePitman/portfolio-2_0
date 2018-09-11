import React from 'react'
import styled, { keyframes } from 'styled-components'

import { MAIN_PARAGRAPH_FONT } from '../../constants/fonts'

const StaggeredAppearanceParagraph = ({ mainColor }) => {

  const Paragraph = styled.p`
    font-family: ${ MAIN_PARAGRAPH_FONT };
    font-size: 40px;
    text-align: center;
  `

  const FirstText = styled.span`
    color: ${ mainColor }
  `

  const SecondText = styled.span`
    color: white;
  `
  return(
    <Paragraph>
      <SecondText>I’m </SecondText> <FirstText>Jake:</FirstText> <br/>

      <SecondText>I’m</SecondText> <FirstText>calm</FirstText> <SecondText>under pressure, and strive to be </SecondText> <FirstText>clear-minded</FirstText> <SecondText>in all that I do.<br/>

      I’m </SecondText> <FirstText>inspired</FirstText> <SecondText>to work as a developer so that I can be both </SecondText> <FirstText>a teacher and a student</FirstText> <SecondText>my whole life.</SecondText>
    </Paragraph>
  )
}

export default StaggeredAppearanceParagraph
