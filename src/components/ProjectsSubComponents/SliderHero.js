import React from 'react';
import styled from 'styled-components';

import { SHARE_TECH } from '../../constants/fonts';
import { SECTION_BACKGROUND, DEAD_GREY } from '../../constants/colors';

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
    cursor: pointer;

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
    <Container className="slider-hero">
      {console.log(cardInfo)}
      <Description>{cardInfo.description}</Description>
      <SubContentContainer>
        <ButtonsContainer>
          {cardInfo.isCurrentSite ? (
            <a href="/">
              <Button>Home</Button>
            </a>
          ) : null}
          {cardInfo.liveLink ? (
            <a target="_blank" href={cardInfo.liveLink}>
              <Button>See it live</Button>
            </a>
          ) : null}
          {cardInfo.designLink ? (
            <a target="_blank" href={cardInfo.designLink}>
              <Button>See the design</Button>
            </a>
          ) : null}
          {cardInfo.repoLink ? (
            <a target="_blank" href={cardInfo.repoLink}>
              <Button>See the repo</Button>
            </a>
          ) : null}
        </ButtonsContainer>
        <Screenshot src={cardInfo.screenshot} />
      </SubContentContainer>
    </Container>
  );
};

export default SliderHero;
