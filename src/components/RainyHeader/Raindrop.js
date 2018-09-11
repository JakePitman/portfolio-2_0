import React from 'react'
import styled, { keyframes } from 'styled-components'

const Raindrop = ({ zIndex, left, height, speed }) => {

  //-------------------STYLING-------------------

  const FallParameters = styled.div`
    border: 1px solid blue;
    height: ${height};
    position: absolute;
    width: 10%;
    left: ${left};
    z-index: ${zIndex}
  `
  
  const fallAnimation = keyframes`
    0% {
        top: 0%;
      }
    85% {
      width: 3px;
      height: 15px;
    }
    100% {
      width: 15px;
      height: 3px;
      top: 97.5%;
    }
  `

  const Droplet = styled.div`
    animation: ${ fallAnimation } ${speed} infinite;
    width: 3px;
    height: 15px;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 0px 85px 10px #01C2FF;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  `

  const DropletParameters = styled.div`
    width: 100%;
    height: 5%;
    border: 1px solid grey;
    position: absolute;
    bottom: 0;
  `

  const outerCircleAnimation = keyframes`
    0% {
      width: 0%;
      height: 0%;
      opacity: 0.7;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  `

  const OuterCircle = styled.div`
    animation: ${outerCircleAnimation} ${speed} infinite;
    animation-delay: ${speed};
    opacity: 0;
    border: 1px solid #01C2FF;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  `

  const innerCircleAnimation = keyframes`
    0% {
      width: 0%;
      height: 0%;
      opacity: 0.7;
    }
    100% {
      width: 30%;
      height: 30%;
      opacity: 0;
    }
  `

  const InnerCircle = styled.div`
    animation: ${innerCircleAnimation} ${speed} infinite;
    animation-delay: ${speed};
    opacity: 0;
    border: 1px solid #01C2FF;
    border-radius: 50%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  `
  //----------------------RETURNED COMPONENT---------------

  return (
      <FallParameters>
        <Droplet/>
        <DropletParameters>
          <OuterCircle/>
          <InnerCircle/>
        </DropletParameters>
      </FallParameters>
  )
}

export default Raindrop
