import React from 'react';

import { Title, ContainerCard } from './styles';
import { Container } from '../../styles/global';

import ContextTitle from '../../components/ContextTitle';
import CardMenu from '../../components/CardMenu';
import history from '../../services/history';

const Classes = () => (
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
    <ContextTitle title="Editar" />
    <ContainerCard>
      <CardMenu
        title="Atualizar de Turma"
        content="Atualizar apenas de Turma."
        onClick={() => history.push('/Turmas/Update')}
      />
    </ContainerCard>
    <ContextTitle title="Processos" />
    <ContainerCard>
      <CardMenu
        title="Adicionar o curso a turma"
        onClick={() => history.push('/Turmas/Update')}
      />
    </ContainerCard>
  </Container>
);

export default Classes;
