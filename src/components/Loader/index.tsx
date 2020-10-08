import React from 'react';
import { Dimmer, Loader, Segment  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { Container } from './styles';


const LoaderComponent: React.FC = () => {
  return (
    <Container>
      <Segment basic={true}>
        <Dimmer active inverted className="loader-dimmer">
          <Loader indeterminate size='big' inline='centered'>
            <span>Carregando</span>
          </Loader>
        </Dimmer>
      </Segment>
    </Container>
  );
};

export default LoaderComponent;


