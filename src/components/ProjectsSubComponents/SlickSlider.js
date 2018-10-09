import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import SliderCard from './SliderCard';
import SliderHero from './SliderHero';
import cardsInfo from './cardsInfo';

const SlickSlider = () => {
  //-------------------------STYLING------------------

  const Container = styled.div`
    width: 80%;
    border: 1px solid green;
  `;

  const heroSliderSettings = {
    fade: true,
    slidesToShow: 1,
    arrows: false
  };

  const navSliderSettings = {
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
      <Slider {...navSliderSettings}>
        {cardsInfo.map((cardInfo, i) => {
          return <SliderCard title={cardInfo.title} number={i} key={i} />;
        })}
      </Slider>
    </Container>
  );
};

export default SlickSlider;
