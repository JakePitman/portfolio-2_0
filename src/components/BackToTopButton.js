import React from 'react';
import styled from 'styled-components';

import { TOP_SECTION_FONT } from '../constants/fonts';
import { DEAD_GREY } from '../constants/colors';
import { PHONE_BREAKPOINT } from '../constants/media-queries';

const BackToTopButton = ({ mainColor }) => {
  const Container = styled.div`
    height: 30vh;
    display: flex;
    align-items: center;
  `;
  const Button = styled.h2`
    color: ${DEAD_GREY}
    box-shadow: 0 0 5px ${DEAD_GREY};
    text-align: center;
    font-size: 50px;
    font-family: ${TOP_SECTION_FONT};
    border-radius: 20px;
    padding: 20px;
    transition: all 1s;
    &:hover {
      color: white;
      text-shadow: 0 0 2.5px ${mainColor}, 0 0 5px ${mainColor},
        0 0 7.5px ${mainColor}, 0 0 10px ${mainColor}, 0 0 17.5px ${mainColor},
        0 0 20px ${mainColor}, 0 0 25px ${mainColor}, 0 0 37.5px ${mainColor};
      box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7),
        0px 0px 0px 5px ${mainColor}, 0px 0px 0px 3px ${mainColor} inset,
        0px 0px 60px ${mainColor}, 0px 0px 60px ${mainColor} inset;
    }
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 20px;
  }
  `;

  return (
    <Container>
      <Button>Back to top</Button>
    </Container>
  );
};

export default BackToTopButton;
