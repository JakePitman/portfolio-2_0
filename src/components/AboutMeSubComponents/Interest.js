import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MAIN_PARAGRAPH_FONT } from '../../constants/fonts';
import { ABOUT_ME_MAIN_COLOR_TRANSLUCENT } from '../../constants/colors';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

//-------------------------STYLING----------------------
const Container = styled.div`
  overflow: hidden;
  background: ${ABOUT_ME_MAIN_COLOR_TRANSLUCENT};
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 300px;
  border-radius: 5px;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    flex-direction: row;
    height: 18vh;
    width: 80vw;
  }
`;

const IconContainer = styled.div`
  color: rgba(255, 255, 255);
  font-size: 100px;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 50px;
    margin-left: 10px;
  }
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: ${MAIN_PARAGRAPH_FONT};
  font-size: 50px;
  margin: 0;
  opacity: 0;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    width: 60vw;
    text-align: center;
  }
`;

//--------------------------COMPONENT-----------------------

const Interest = ({ icon, text }) => (
  <Container className="interest-container">
    <IconContainer>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
    <Text className="interest-text">{text}</Text>
  </Container>
);

export default Interest;
