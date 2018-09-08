import React from 'react';
import styled, {keyframes} from 'styled-components'

const Frame = styled.div`
  //background-color: transparent;
  border-radius: 2rem;
  border: 1rem solid;
  box-shadow: inset 0 0 18rem black,
    inset 0 0 3rem black,
    0 0 10rem black;
  width: 90%;
  height: 300px;
  position: absolute;
  top: 2%;
  left: 1%;
`

const Output = styled.div`
  position: absolute;
  background-color: rgba(35, 44, 77);
  width: 100%;
  height: 100%;
  //padding: 3rem 2rem;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const scanlinesAnimation = keyframes`
  0% {
    background: repeating-linear-gradient(
              0deg,
            rgba(155,155,155,0.5),
            rgba(255,255,255,0.2) 1px,
            rgba(35,75,100,0.2) 2px,
            rgba(0,0,0,0.2) 3px,
            rgba(0,0,0,0.6) 4px);
  }
  70% {
    background: repeating-linear-gradient(
              0deg,
            rgba(155,155,155,0.5),
            rgba(195,195,255,0.2) 1px,
            rgba(35,75,170,0.2) 2px,
            rgba(0,0,0,0.2) 3px,
            rgba(0,0,0,0.6) 4px);
  }
  
  100% {
    background: repeating-linear-gradient(
              0deg,
            rgba(155,155,155,0.5),
            rgba(235,235,235,0.2) 1px,
            rgba(65,105,200,0.2) 2px,
            rgba(0,0,0,0.2) 3px,
            rgba(0,0,0,0.6) 4px);
  }
`

const Scanlines = styled.div`
  animation: ${scanlinesAnimation} 8s infinite;
  width: 100%;
  height: 100%;
  //background: repeating-linear-gradient(
            //0deg,
            //rgba(255,255,255,0.5),
            //rgba(255,255,255,0.2) 1px,
            //rgba(35,75,170,0.9) 2px,
            //rgba(0,0,0,0.2) 3px,
            //rgba(0,0,0,0.6) 4px);
  border-radius: 1rem;
  position: absolute;
`

const glowAnimation = keyframes`
  0% { opacity: 0.1; }
  25% { opacity: 0.4; }
  50% { opacity: 0.1; }
  75% { opacity: 0.4; }
  100% { opacity: 0.1; }
`
const Glow = styled.div`
  animation: ${glowAnimation} 20s infinite;
  background:
    radial-gradient(circle at center,
    rgba(120,120,210,0.8) 0%,
    rgba(90,90,150,0.68) 58%,
    rgba(90,90,140,0.47) 80%,
    rgba(200,200,255,0.27) 93%,
    rgba(100,100,155,0) 100%);
  opacity: 0.15;
  //position: fixed
  width: 100%;
  height: 100%;
`

const nameAnimation = keyframes`
  0% { text-shadow: -3px 0.1rem 1rem #004F68 }
  50% { text-shadow: 3px 0.2rem 2rem #004f68 }
  100% { text-shadow: -3px 0.1rem 3rem #004f68 }
`

const Name = styled.div`
  animation: ${nameAnimation} 0.5s infinite;
  font-family: 'Geostar', cursive;
  color: #01C2FF;
  font-size: 50px;
  text-align: center;
`

const TvBox = () => {
  return (
    <Frame>
      <Output>
        <Name>Jake Pitman</Name> 
      </Output>
      <Scanlines />
      <Glow />
    </Frame>
  );
};

export default TvBox;
