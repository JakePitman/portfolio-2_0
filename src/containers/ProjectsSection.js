import React from 'react';
import styled from 'styled-components';

import WebApps from '../components/ProjectsSubComponents/WebApps';
import MicroApps from '../components/ProjectsSubComponents/MicroApps';
import ControlPanel from '../components/ProjectsSubComponents/ControlPanel';

//------------------STYLING------------------

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class ProjectsSection extends React.Component {
  state = {
    activeSection: 'web apps'
  };

  changeSection = () => {
    this.state.activeSection === 'web apps'
      ? this.setState({ activeSection: 'micro apps' })
      : this.setState({ activeSection: 'web apps' });
  };

  render() {
    return (
      <Container>
        <ControlPanel
          activeButton={this.state.activeSection}
          handleClick={this.changeSection}
        />
        {this.state.activeSection === 'web apps' ? <WebApps /> : <MicroApps />}
      </Container>
    );
  }
}

export default ProjectsSection;
