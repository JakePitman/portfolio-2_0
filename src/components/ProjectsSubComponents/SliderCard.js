import React from 'react';
import styled from 'styled-components';

import { PROJECTS_MAIN_COLOR, DEAD_GREY } from '../../constants/colors';
import { SUBHEADING_FONT } from '../../constants/fonts';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';
import './SliderCard.css';

//--------------------------STYLING---------------------
const Card = styled.div`
  border: 1px solid ${PROJECTS_MAIN_COLOR};
  height: 10vh;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-family: ${SUBHEADING_FONT};
  color: ${DEAD_GREY};
  text-align: center;

  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 10px;
  }
`;

//---------------------RETURNED COMPONENT---------------
const SliderCard = ({ title }) => (
  <Card>
    <Title className="slider-card">{title}</Title>
  </Card>
);

export default SliderCard;
