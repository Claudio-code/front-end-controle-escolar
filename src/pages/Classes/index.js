import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

const Classes = () => {
  return (
    <Container>
      <Title>
        Opções da Turma
      </Title>
      <ContextTitle title="Cadastro" />
      <ContainerCard>
        <CardMenu
          title="Cadastro de Turma"
          content="Cadastro apenas de Turma."
          onClick={() => history.push('/Turmas/Cadastro')}
        />
      </ContainerCard>
    </Container>
  );
};

export default Classes;
