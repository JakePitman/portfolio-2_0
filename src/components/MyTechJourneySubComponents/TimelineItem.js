import React from 'react';
import styled from 'styled-components';

import { SECTION_BACKGROUND } from '../../constants/colors';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

//---------------------STYLING---------------------

const Content = styled.div`
  position: relative;
  bottom: 0;
  width: 40vw;
  background: transparent;
  bottom: 1.5vw;
  border-bottom: 1px solid white;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  padding: 5vh 0;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    padding: 1vh 0;
  }
`;

const Title = styled.h2`
  color: #01c2ff;
  font-family: 'Permanent Marker', cursive;
  font-size: 60px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 25px;
  }
`;

const SubTitle = styled.h3`
  color: #01c2ff;
  font-family: 'VT323', monospace;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  font-size: 45px;
  margin: 0;
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  color: white;
  font-family: 'VT323', monospace;
  font-size: 40px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 15px;
  }
`;

const Item = styled.li`
  list-style-type: none;
  position: relative;
  width: 2px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
  //The Circles
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    background: ${SECTION_BACKGROUND};
    border: 1px solid white;
  }
  &:nth-child(odd) ${Content} {
    left: 0vw;
    text-align: right;
  }
  &:nth-child(even) ${Content} {
    right: 40vw;
  }
  &.in-view ${Content} {
    transform: none;
    visibility: visible;
    opacity: 1;
  }
`;

const TimelineItem = ({ mainColor, title, subTitle, children }) => (
  <Item className="timeline-item">
    <Content>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Text>{children}</Text>
    </Content>
  </Item>
);

export default TimelineItem;
