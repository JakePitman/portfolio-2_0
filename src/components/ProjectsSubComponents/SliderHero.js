import React from 'react';
import styled from 'styled-components';

import { SUBHEADING_FONT } from '../../constants/fonts';
import { PROJECTS_MAIN_COLOR } from '../../constants/colors';

const SliderHero = ({ cardInfo }) => {
  //----------------------------STYLING---------------------
  const Container = styled.div`
    border: 1px solid ${PROJECTS_MAIN_COLOR};
    height: 300px;
    width: 100%;
  `;

  const Title = styled.div`
    color: ${PROJECTS_MAIN_COLOR};
    font-family: ${SUBHEADING_FONT};
  `;
  return (
    <Container>
      <Title>{cardInfo.title}</Title>
    </Container>
  );
};

export default SliderHero;
