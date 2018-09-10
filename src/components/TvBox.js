import React, {Fragment} from 'react';
import styled, {keyframes} from 'styled-components'
import { connect } from 'react-redux'

import profilePicture from '../assets/img/profile.png'
import { ABOUT_ME_MAIN_COLOR } from '../constants/colors'
import { ABOUT_ME, MY_TECH_JOURNEY, PROJECTS } from '../constants/nav-button-types'
import { GEOSTAR } from '../constants/fonts'
import { PHONE_BREAKPOINT } from '../constants/media-queries'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

//-------------------------------STYLING-------------------------

const Frame = styled.div`
  background-color: transparent;
  border-radius: 2rem;
  box-shadow: inset 0 0 2vw black,
    inset 0 0 3rem black,
    0 0 10rem black;
  width: 80vw;
  height: 40vh;
  position: relative;
  margin: 2rem 0;

  @media (min-width: ${ PHONE_BREAKPOINT }) {
    width: 500px;
    height: 50vh;
  }
`

const Output = styled.div`
  background-color: rgba(35, 44, 77);
  width: 100%;
  height: 100%;
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
  width: inherit;
  height: inherit;
  border: 1rem solid;
  border-radius: 1rem;
  position: absolute;
  left: -1rem;
  top: -1rem;
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const nameShadowAnimation = keyframes`
  0% { text-shadow: -3px 0.1rem 1rem #004F68 }
  50% { text-shadow: 3px 0.2rem 2rem #004f68 }
  100% { text-shadow: -3px 0.1rem 3rem #004f68 }
`

const namePaddingAnimation = keyframes`
  0% { padding: 2px 0 0 1px; }
  10% { padding: 0px 0 0 0; }
`
const Name = styled.div`
  animation: ${nameShadowAnimation} 0.5s infinite;
  animation: ${namePaddingAnimation} 1.5s infinite;
  font-family: ${ GEOSTAR };
  color: ${ABOUT_ME_MAIN_COLOR};
  font-size: 50px;
  text-align: center;
`

const flickerAnimation = keyframes`
  0%, 17%, 80% { opacity: 0.4; }
  15% , 30%, 60%, 85%, 95% { opacity: 0; }
`

const Flicker = styled.div`
  animation: ${flickerAnimation} 2s infinite;
  position: absolute;
  font-family: ${ GEOSTAR };
  color: rgba(113, 218, 252, 0.3);
  font-size: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  padding-right: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

//----------------------COMPONENT--------------------------

const mapStateToProps = state => {
  return { currentSection: state.currentSection }
}

const ConnectedTvBox = ({ currentSection }) => {

  let outputJsx
  switch ( currentSection ) {
    case ABOUT_ME:
      outputJsx = (
        <Image src={profilePicture}/>
      )
      break;
    default:
      outputJsx = (
        <Fragment>
          <Name>Jake Pitman</Name> 
          <Flicker>Jake Pitman</Flicker>
        </Fragment>
      )
  }

  return (
    <Container>
      <Frame>
        <Output>
          {outputJsx}
        </Output>
        <Scanlines />
        <Glow />
      </Frame>
    </Container>
  );
};

const TvBox = connect(mapStateToProps) (ConnectedTvBox)

export default TvBox;
