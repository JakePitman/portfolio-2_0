import React from 'react';
import styled from 'styled-components';

import { SUBHEADING_FONT } from '../constants/fonts';
import { PHONE_BREAKPOINT } from '../constants/media-queries';

const SubHeading = ({ children, mainColor }) => {
  const Heading = styled.h1`
    text-align: center;
    text-shadow: 0 0 2.5px ${mainColor}, 0 0 5px ${mainColor},
      0 0 7.5px ${mainColor}, 0 0 10px ${mainColor}, 0 0 17.5px ${mainColor},
      0 0 20px ${mainColor}, 0 0 25px ${mainColor}, 0 0 37.5px ${mainColor};
    font-size: 130px;
    font-family: ${SUBHEADING_FONT};
    color: white;
    @media (max-width: ${PHONE_BREAKPOINT}) {
      font-size: 10vw;
    }
    margin-top: 0;
  `;

  return <Heading>{children}</Heading>;
};

export default SubHeading;
