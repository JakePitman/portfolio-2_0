import React, { Fragment } from 'react';
import styled from 'styled-components';

import { SECTION_BACKGROUND } from '../../constants/colors';
import { SHARE_TECH } from '../../constants/fonts';
import { PHONE_BREAKPOINT } from '../../constants/media-queries';

const Container = styled.div`
  background: white;
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin: 20px 0;
`;

const ActiveButton = styled.button`
  background: ${SECTION_BACKGROUND};
  color: white;
  border-radius: 5px;
  font-size: 30px;
  font-family: ${SHARE_TECH};
  padding: 10px 20px;
  text-shadow: 0 0 30px white;

  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 20px;
  }
`;

const IdleButton = styled.button`
  background: white;
  border: 1px solid ${SECTION_BACKGROUND};
  border-radius: 5px;
  color: ${SECTION_BACKGROUND};
  font-size: 30px;
  font-family: ${SHARE_TECH};
  padding: 10px 20px;
  cursor: pointer;

  @media (max-width: ${PHONE_BREAKPOINT}) {
    font-size: 20px;
  }
`;

const ControlPanel = ({ activeButton, handleClick }) => (
  <Container>
    {activeButton === 'web apps' ? (
      <Fragment>
        <ActiveButton>Web Apps</ActiveButton>
        <IdleButton onClick={handleClick}>Micro Apps</IdleButton>
      </Fragment>
    ) : (
      <Fragment>
        <IdleButton onClick={handleClick}>Web Apps</IdleButton>
        <ActiveButton>Micro Apps</ActiveButton>
      </Fragment>
    )}
  </Container>
);

export default ControlPanel;
