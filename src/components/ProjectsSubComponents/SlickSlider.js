import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import SliderCard from './SliderCard';
import SliderHero from './SliderHero';
import cardsInfo from './cardsInfo';

import { PHONE_BREAKPOINT } from '../../constants/media-queries';

const SlickSlider = () => {
  //-------------------------STYLING------------------

  const Container = styled.div`
    width: 80%;
  `;

  const heroSliderSettings = {
    fade: true,
    slidesToShow: 1,
    arrows: false
  };

  const NavSliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const LeftButton = styled.button`
    border: 5px solid white;
    width: 100px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px 0 0 5px;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      display: none;
    }
  `;

  const RightButton = styled.button`
    border: 5px solid white;
    width: 100px;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0 5px 5px 0;

    @media (max-width: ${PHONE_BREAKPOINT}) {
      display: none;
    }
  `;

  const navSliderSettings = {
    arrows: false,
    touchMove: true,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      this.slider.slickGoTo(next);
    },
    swipeToSlide: true
  };

  return (
    <Container>
      <Slider ref={(slider) => (this.slider = slider)} {...heroSliderSettings}>
        {cardsInfo.map((cardInfo, i) => {
          return <SliderHero cardInfo={cardInfo} key={i} />;
        })}
      </Slider>
      <br />
      <br />
      <NavSliderContainer>
        <LeftButton onClick={() => this.navSlider.slickPrev()}>
          &#60;
        </LeftButton>
        <Slider
          ref={(navSlider) => (this.navSlider = navSlider)}
          {...navSliderSettings}
        >
          {cardsInfo.map((cardInfo, i) => {
            return <SliderCard title={cardInfo.title} number={i} key={i} />;
          })}
        </Slider>
        <RightButton onClick={() => this.navSlider.slickNext()}>
          &#62;
        </RightButton>
      </NavSliderContainer>
    </Container>
  );
};

export default SlickSlider;
