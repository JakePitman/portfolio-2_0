import React from 'react';
import styled from 'styled-components';

import { PROJECTS_MAIN_COLOR, DEAD_GREY } from '../../constants/colors';
import { SUBHEADING_FONT } from '../../constants/fonts';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';
import './SliderCard.css';

const SliderCard = ({ centered, title, number }) => {
  //--------------------------STYLING---------------------
  const Card = styled.div`
    border: 1px solid ${PROJECTS_MAIN_COLOR};
    height: 10vh;
    cursor: pointer;
  `;
  const Title = styled.h1`
    font-family: ${SUBHEADING_FONT};
    color: ${DEAD_GREY};
    text-align: center;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      font-size: 20px;
    }
  `;

  //---------------------RETURNED COMPONENT---------------
  return (
    <Card>
      <Title className="slider-card">{title}</Title>
    </Card>
  );
};

export default SliderCard;
