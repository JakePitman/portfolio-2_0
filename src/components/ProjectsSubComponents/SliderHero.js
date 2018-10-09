import React from 'react';
import styled from 'styled-components';

import { SHARE_TECH } from '../../constants/fonts';
import { SECTION_BACKGROUND, DEAD_GREY } from '../../constants/colors';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

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

    @media (max-width: ${PHONE_BREAKPOINT}) {
      font-size: 15px;
    }
  `;

  const SubContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    border: 3px solid yellow;
    height: 55vh;
    padding: 5px;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      flex-direction: column-reverse;
      align-items: center;
    }
  `;

  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      flex-direction: row;
    }
  `;

  const Button = styled.button`
    width: 250px;
    font-size: 30px;
    color: ${SECTION_BACKGROUND};
    font-family: ${SHARE_TECH};
    border: 1px solid ${SECTION_BACKGROUND};
    padding: 20px 0;
    transition: all 0.5s;
    border-radius: 5px;
    cursor: pointer;
    background: white;

    &:hover {
      color: white;
      background: ${SECTION_BACKGROUND};
    }

    @media (max-width: ${PHONE_BREAKPOINT}) {
      width: 20vw;
      padding: 10px 0;
      font-size: 10px;
    }
  `;

  const Link = styled.a`
    margin: 20px;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      margin: 10px;
    }
  `;

  const Screenshot = styled.img`
    max-height: 55vh;
    max-width: 40%;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      max-height: 40vh;
      max-width: 50%;
    }
  `;

  return (
    <Container className="slider-hero">
      <Description>{cardInfo.description}</Description>
      <SubContentContainer>
        <ButtonsContainer>
          {cardInfo.isCurrentSite ? (
            <Link href="/">
              <Button>Home</Button>
            </Link>
          ) : null}
          {cardInfo.liveLink ? (
            <Link target="_blank" href={cardInfo.liveLink}>
              <Button>See it live</Button>
            </Link>
          ) : null}
          {cardInfo.designLink ? (
            <Link target="_blank" href={cardInfo.designLink}>
              <Button>See the design</Button>
            </Link>
          ) : null}
          {cardInfo.repoLink ? (
            <Link target="_blank" href={cardInfo.repoLink}>
              <Button>See the repo</Button>
            </Link>
          ) : null}
        </ButtonsContainer>
        <Screenshot src={cardInfo.screenshot} />
      </SubContentContainer>
    </Container>
  );
};

export default SliderHero;
