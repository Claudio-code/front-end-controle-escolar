import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Borda } from './styles';

function ContextTitle({ title }) {
  return (
    <Container>
      <Borda />
      <Title>
        { title }
      </Title>
      <Borda />
    </Container>
  );
}

ContextTitle.propTypes = {
  title: PropTypes.string,
};

ContextTitle.defaultProps = {
  title: 'context',
};

export default ContextTitle;
