import React from 'react';
import styled, { keyframes } from 'styled-components';

import { SUBHEADING_FONT } from '../constants/fonts';
import { PHONE_BREAKPOINT } from '../constants/media-queries';

const SubHeading = ({ children, mainColor }) => {
  const glowAnimation = keyframes`
    from {
        text-shadow: 0 0 5px ${mainColor}, 0 0 10px ${mainColor}, 0 0 15px ${mainColor}, 0 0 20px ${mainColor}, 0 0 35px ${mainColor}, 0 0 40px ${mainColor}, 0 0 50px ${mainColor}, 0 0 75px ${mainColor};
      }
      to {
        text-shadow: 0 0 2.5px ${mainColor}, 0 0 5px ${mainColor}, 0 0 7.5px ${mainColor}, 0 0 10px ${mainColor}, 0 0 17.5px ${mainColor}, 0 0 20px ${mainColor}, 0 0 25px ${mainColor}, 0 0 37.5px ${mainColor};
      }
  `;
  const Heading = styled.h1`
    font-size: 150px;
    font-family: ${SUBHEADING_FONT};
    color: white;
    animation: ${glowAnimation} 1.5s infinite ease-in-out alternate;
    @media (max-width: ${PHONE_BREAKPOINT}) {
      font-size: 10vw;
    }
  `;

  return <Heading>{children}</Heading>;
};

export default SubHeading;
