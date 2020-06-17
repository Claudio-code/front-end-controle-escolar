import React from 'react';
import CardContent from '@material-ui/core/CardContent';

import {
  Container,
  Content,
  Title,
  ActionArea,
} from './styles';

function CardMenu({ title, content, onClick }) {
  return (
    <Container>
      <ActionArea onClick={() => onClick()}>
        <CardContent>
          <Title>
            { title }
          </Title>
          <Content>
            { content }
          </Content>
        </CardContent>
      </ActionArea>
    </Container>
  );
}

export default CardMenu;
