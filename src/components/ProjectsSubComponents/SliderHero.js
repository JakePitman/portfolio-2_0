import React from 'react';
import styled from 'styled-components';

import { SHARE_TECH } from '../../constants/fonts';
import { SECTION_BACKGROUND } from '../../constants/colors';

const SliderHero = ({ cardInfo }) => {
  //----------------------------STYLING---------------------
  const Container = styled.div`
    background: white;
    border-radius: 5px;
    height: 80vh;
    width: 100%;
  `;

  const Description = styled.p`
    color: ${SECTION_BACKGROUND};
    font-family: ${SHARE_TECH};
    font-size: 30px;
    text-align: center;
    height: 15vh;
    padding: 10px;
  `;

  const SubContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    border: 3px solid yellow;
    height: 55vh;
    padding: 5px;
  `;

  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    width: 250px;
    font-size: 30px;
    color: ${SECTION_BACKGROUND};
    font-family: ${SHARE_TECH};
    border: 1px solid ${SECTION_BACKGROUND};
    padding: 20px 0;
    margin: 20px;
    transition: all 0.5s;
    border-radius: 5px;

    &:hover {
      color: white;
      background: ${SECTION_BACKGROUND};
    }
  `;

  const Screenshot = styled.img`
    max-height: 55vh;
    max-width: 40%;
  `;

  return (
    <Container>
      <Description>{cardInfo.description}</Description>
      <SubContentContainer>
        <ButtonsContainer>
          <Button>See it live</Button>
          <Button>See the design</Button>
          <Button>See the repo</Button>
        </ButtonsContainer>
        <Screenshot src={cardInfo.screenshot} />
      </SubContentContainer>
    </Container>
  );
};

export default SliderHero;
