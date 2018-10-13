import React from 'react';
import styled from 'styled-components';

import { DEAD_GREY } from '../../constants/colors';
import { TOP_SECTION_FONT } from '../../constants/fonts';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

//---------------------STYLING------------------------

const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 10vh;
  margin: 1vh;
  background: linear-gradient(rgba(66, 69, 72), rgba(48, 51, 53));
  box-shadow: 0px 5px 0px rgba(36, 39, 42);
  font-family: ${TOP_SECTION_FONT};
  font-size: 1.5rem;
  cursor: pointer;
  color: ${DEAD_GREY};
  outline: none;

  @media (min-width: ${PHONE_BREAKPOINT}) {
    width: 400px;
    font-size: 2rem;
  }
`;

//--------------------COMPONENT-----------------------

const NavButton = ({ isCurrent, handleClick, mainColor, children }) => (
  <Button
    style={
      isCurrent
        ? {
            color: 'white',
            textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${mainColor}, 0 0 35px ${mainColor}, 0 0 40px ${mainColor}, 0 0 50px ${mainColor}, 0 0 75px ${mainColor}`
          }
        : null
    }
    onClick={handleClick}
  >
    {children}
  </Button>
);

export default NavButton;
