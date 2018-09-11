import React from 'react'
import styled, { keyframes } from 'styled-components'

import Raindrop from './Raindrop'

const RainyHeader = ( {mainColor} ) => {

  //---------------------STYLING-------------------
  
  const Container = styled.div`
    border: 1px solid ${mainColor} ;
    width: 100%;
    height: 100%;
    position: absolute;
  `

  //----------------RETURNED COMPONENT-------------

  return (
    <Container>
      <Raindrop zIndex='2' left='20%' height='90%' speed='2s'/>
      <Raindrop zIndex='0' left='50%' height='100%' speed='2.5s'/>
      
    </Container>
  )
}

export default RainyHeader
