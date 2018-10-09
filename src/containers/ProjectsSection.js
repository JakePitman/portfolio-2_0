import React from 'react';
import styled from 'styled-components';

import SlickSlider from '../components/ProjectsSubComponents/SlickSlider';

//------------------STYLING------------------

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectsSection = () => {
  return (
    <Container>
      <SlickSlider />;
    </Container>
  );
};

export default ProjectsSection;
