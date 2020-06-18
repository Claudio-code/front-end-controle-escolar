import React from 'react';
import PropTypes from 'prop-types';
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

CardMenu.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
};

CardMenu.defaultProps = {
  title: '',
  content: '',
  onClick: () => {},
};

export default CardMenu;
