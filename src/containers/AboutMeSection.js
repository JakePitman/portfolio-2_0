import React from 'react'
import styled from 'styled-components'

import RainyBackdrop from '../components/RainyHeader/RainyBackdrop'
import SubHeading from '../components/SubHeading'
import StaggeredAppearanceParagraph from '../components/AboutMeSubComponents/StaggeredAppearanceParagraph'

//------------------STYLING------------------

  const MainContainer = styled.div`
    position: relative;
  `

  const ContentContainer = styled.div`
    position: relative;
    z-index: 1;
    border: 1px solid pink;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

const AboutMeSection = ({ mainColor }) => {

  return (
    <MainContainer>
      { /*<RainyBackdrop mainColor={mainColor} /> */} 
      <ContentContainer>
        <SubHeading mainColor={ mainColor }>
          Who am I?
        </SubHeading>
        <StaggeredAppearanceParagraph mainColor={ mainColor }/>
      </ContentContainer>
    </MainContainer>
  )
}

export default AboutMeSection
