import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

function Teachers() {
  return (
    <Container>
      <Title>
        Opções do Professor
      </Title>
      <ContextTitle title="Cadastro" />
      {/* <ContainerCard>
      </ContainerCard> */}
    </Container>
  );
}

export default Teachers;
