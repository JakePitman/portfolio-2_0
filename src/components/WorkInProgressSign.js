import React from 'react';
import styled, { keyframes } from 'styled-components';

import { TOP_SECTION_FONT, SUBHEADING_FONT } from '../constants/fonts';
import { SECTION_BACKGROUND_TRANSLUCENT } from '../constants/colors';
import { PHONE_BREAKPOINT } from '../constants/media-queries';

const WorkInProgressSign = ({ mainColor }) => {
  const Sign = styled.div`
    border-radius: 20px;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7),
      0px 0px 0px 5px ${mainColor}, 0px 0px 0px 3px ${mainColor} inset,
      0px 0px 60px ${mainColor}, 0px 0px 60px ${mainColor} inset;
    position: relative;
    height: 300px;
    background: ${SECTION_BACKGROUND_TRANSLUCENT};
    margin: 40vh 0;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      width: 95%;
      margin: 10vh 0;
    }
  `;

  const glowAnimation = keyframes`
  0%, 25%, 95% {
    text-shadow: 0 0 50px ${mainColor};
  }
  24%, 80%, 100% {
    text-shadow: 0 0 70px ${mainColor};
  }
  `;

  const LargeText = styled.h1`
    animation: ${glowAnimation} 2s infinite;
    color: white;
    font-family: ${TOP_SECTION_FONT};
    text-align: center;
    font-size: 100px;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      font-size: 10vw;
    }
  `;

  const flickerAnimation = keyframes`
  0%, 30%, 100% {
    opacity: 1;
  }
  29% {
    opacity: 0.7;
  }
  `;

  const FlickerText = styled.p`
    font-size: inherit;
    display: inline;
    animation: ${flickerAnimation} 3s infinite;

    &.second {
      animation-delay: 1s;
    }

    &.third {
      animation-delay: 2s;
    }
  `;

  const SmallText = styled.h2`
    animation: ${glowAnimation} 2s infinite;
    animation-delay: 0.5s
    color: ${mainColor};
    font-family: ${SUBHEADING_FONT};
    margin: 20px;
    text-align: center;
  `;

  return (
    <Sign>
      <LargeText>
        St<FlickerText>a</FlickerText>y Tu<FlickerText className="second">
          n
        </FlickerText>ed
      </LargeText>
      <SmallText>
        This section is a work in p<FlickerText className="third">
          r
        </FlickerText>ogress - please be sure to visit again soon!
      </SmallText>
    </Sign>
  );
};

export default WorkInProgressSign;
