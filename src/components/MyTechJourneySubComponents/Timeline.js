import React from 'react';
import styled from 'styled-components';
import lifecycle from 'react-pure-lifecycle';

import TimelineItem from './TimelineItem';

//----------------Lifecycle Methods------------------
const componentDidMount = (props) => {
  const items = [].slice.call(document.getElementsByClassName('timeline-item'));
  const hasElementBeenScrolledUp = (el) => {
    const rect = el.getBoundingClientRect();
    const elementYOffset = rect.top + window.pageYOffset;
    const docViewTop = window.pageYOffset;
    return elementYOffset >= docViewTop;
  };

  const callbackFunc = () => {
    items.forEach((item) => {
      if (hasElementBeenScrolledUp(item)) {
        item.classList.add('in-view');
      } else {
        item.classList.remove('in-view');
      }
    });
  };

  window.addEventListener('scroll', callbackFunc);
};

const methods = {
  componentDidMount
};

//------------------STYLING-----------------
const List = styled.ul`
  padding: 0;
`;

const BottomSpacer = styled.li`
  height: 70vh;
  list-style-type: none;
  position: relative;
  width: 2px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
`;

const Timeline = ({ mainColor }) => (
  <List>
    <TimelineItem title="Internship" subTitle="Four weeks with REA">
      AWS<br />
      Docker<br />
      Agile
    </TimelineItem>
    <TimelineItem title="Term 3" subTitle="Coder Academy">
      Javascript<br />
      Node<br />
      React<br />
      Express<br />
      MongoDB
    </TimelineItem>
    <TimelineItem title="Term 2" subTitle="Coder Academy">
      Ruby on Rails<br />
      HTML<br />
      CSS<br />
      Web Design Basics<br />
    </TimelineItem>
    <TimelineItem title="Term 1" subTitle="Coder Academy">
      Programming Fundamentals<br />
      Ruby<br />
      Discrete Mathematics
    </TimelineItem>
    <TimelineItem title="Code Camp" subTitle="Assistant Teacher">
      Helping kids learn the basics of programming!<br />
      Block Coding<br />
    </TimelineItem>
    <BottomSpacer />
  </List>
);

export default lifecycle(methods)(Timeline);
