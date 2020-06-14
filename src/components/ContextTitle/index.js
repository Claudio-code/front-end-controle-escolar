import React from 'react';

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

export default ContextTitle;
