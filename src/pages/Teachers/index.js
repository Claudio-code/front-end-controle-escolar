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
      <ContainerCard>
        <CardMenu
          title="Cadastro Professor"
          content="Cadastro apenas do professor."
          onClick={() => history.push('/Professores/Cadastros')}
        />
      </ContainerCard>
    </Container>
  );
}

export default Teachers;
